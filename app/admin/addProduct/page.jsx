'use client';
import { assets } from '@/Assets/assets';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const page = () => {
  const [image, setImage] = useState(null); // For Preview Image

  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Bennett",
    authorImg: "/authorImge.png",
  });

  const [showConfirmation, setShowConfirmation] = useState(false); // For showing confirmation modal

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Client-side validation for empty fields
    if (!data.title || !data.description || !image) {
      toast.error("All fields are required, including the image!");
      return;
    }

    setShowConfirmation(true); // Show confirmation modal
  };

  const confirmPublish = async () => {
    // Submit the form after user confirms
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('authorImg', data.authorImg);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/blog', formData);
      if (response.data.success) {
        toast.success(response.data.msg || "Blog posted!");

        // After Submit Successfully It Will reset All Fields
        setImage(null);
        setData({
          title: "",
          description: "",
          category: "Startup",
          author: "Alex Bennett",
          authorImg: "/authorImge.png",
        });
        setShowConfirmation(false); // Close confirmation modal
      } else {
        toast.error("Error saving blog");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while posting your blog.");
    }
  };

  const cancelPublish = () => {
    setShowConfirmation(false); // Close confirmation modal without submitting
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            className='mt-4'
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            width={140}
            height={70}
            alt='Upload Thumbnail'
          />
        </label>

        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id='image'
          hidden
          required
        />

        {/* Blog Title */}
        <p className='text-xl mt-4'>Blog Title</p>
        <input
          name='title'
          onChange={onChangeHandler}
          value={data.title}
          className='w-full sm:w-[500px] mt-4 px-4 py-3 border'
          type="text"
          placeholder='Type Here'
          required
        />

        {/* Blog Description */}
        <p className='text-xl mt-4'>Blog Description</p>
        <textarea
          name='description'
          onChange={onChangeHandler}
          value={data.description}
          className='w-full sm:w-[500px] mt-4 px-4 py-3 border'
          type="text"
          placeholder='Write Content Here'
          rows={6}
          required
        />
      
        {/* Blog Category */}
        
        
        <br />
        <button
          type='submit'
          className='mt-8 w-40 h-12 bg-black text-white'
        >
          Publish Your Blog
        </button>
      </form>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-xl font-bold mb-4">Are you sure you want to publish?</h2>
            <div className="flex justify-between">
              <button
                onClick={confirmPublish}
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Yes, Publish
              </button>
              <button
                onClick={cancelPublish}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
