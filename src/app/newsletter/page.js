'use client';
import React, { useState } from 'react';

function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // Simulate API call
    setIsSuccess(true);
    setMessage('Thank you for subscribing to our newsletter!');
    setEmail(''); // Clear the input field
  };

  return (
    <div className='z-10 flex min-h-screen items-center justify-center px-4'>
      <div className='w-full max-w-md rounded-lg bg-primary p-8 shadow-lg'>
        <h1 className='font-seasons-bd mb-6 text-center text-3xl text-text'>
          Subscribe to My Newsletter
        </h1>
        <p className='font-seasons-reg mb-8 text-center text-text'>
          Stay updated with my latest insights and developments
        </p>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='w-full rounded border border-gray-300 bg-white px-4 py-3 text-text focus:border-secondary focus:outline-none'
              required
            />
          </div>

          <button
            type='submit'
            className='font-seasons-reg w-full rounded bg-secondary px-6 py-3 text-white transition-opacity hover:opacity-90'
          >
            Subscribe
          </button>

          {message && (
            <div
              className={`font-seasons-reg mt-4 text-center ${isSuccess ? 'text-green-600' : 'text-red-600'}`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default NewsletterPage;
