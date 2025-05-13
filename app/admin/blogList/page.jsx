'use client'
import BlogTableItem from '@/components/AdminComponents/BlogTableItem'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
  const [blogs, setBlogs] = useState([])
  const [showConfirmation, setShowConfirmation] = useState(false)  // To show delete confirmation modal
  const [deleteId, setDeleteId] = useState(null)  // Store the ID of the blog to delete

  // Fetch Blogs
  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog')
    // Sort blogs by date in descending order (latest first)
    const sortedBlogs = response.data.blogs.sort((a, b) => new Date(b.date) - new Date(a.date)) // b - a for latest first
    setBlogs(sortedBlogs)
  }

  // For Delete Blogs
  const deleteBlog = async (mongoID) => {
    const response = await axios.delete('/api/blog', {
      params: {
        id: mongoID,
      },
    })
    toast.success(response.data.msg)
    fetchBlogs()
    setShowConfirmation(false)  // Close the confirmation modal
  }

  const confirmDelete = (mongoID) => {
    setDeleteId(mongoID)  // Store the blog ID to be deleted
    setShowConfirmation(true)  // Show the confirmation modal
  }

  const cancelDelete = () => {
    setShowConfirmation(false)  // Close the confirmation modal without deleting
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Blogs</h1>
      <div className="relative h-[80vh] max-w-[1250px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-200">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className=" px-6 py-3">
                Blog Title
              </th>
              <th scope="col" className=" px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {blogs.map((item, index) => {
              return (
                <BlogTableItem
                  key={index}
                  mongoID={item._id}
                  title={item.title}
                  date={item.date}
                  deleteBlog={confirmDelete}
                />
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-xl font-bold mb-4">Are you sure you want to delete this blog?</h2>
            <div className="flex justify-between">
              <button
                onClick={() => deleteBlog(deleteId)}  // Call deleteBlog with the stored ID
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Yes, Delete
              </button>
              <button
                onClick={cancelDelete}  // Close the confirmation modal without deleting
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default page
