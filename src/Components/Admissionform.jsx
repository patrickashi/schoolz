import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admissionform = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    sex: '',
    courseFirstChoice: '',
    courseSecondChoice: '',
    email: '',
    phoneNumber: '',
    guardiansPhoneNumber: '',
    address: '',
    reg_number: '', // Added reg number to the form data
  });

  const courseOptions = [
    'Community Health',
    'Medical Laboratory Science',
    'Pharmacy',
    'Dispensary & Oprometry Technician',
  ];

  // Function to generate 8-digit student ID
  const generateStudentId = () => {
    return Math.floor(10000000 + Math.random() * 90000000).toString();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate student ID before submitting the form
    const generatedStudentId = generateStudentId();
    const formDataWithId = { ...formData, reg_number: generatedStudentId };

    try {
      const response = await fetch('https://ocohstech.onrender.com/api/submit-admission-form/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('csrftoken'),
        },
        body: JSON.stringify(formDataWithId), // Send the student_id with the form data
      });

      if (response.ok) {
        alert('Your Reg Number has been sent to your email.');
        navigate('/'); // Redirect after submission
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  // Function to get CSRF token from cookies
  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };

  return (
    <div className='bg-indigo-50 max-w-sm mx-auto  my-8 py-10 px-4 rounded-md'>
        <h1 className='text-gray-800 text-2xl text-center font-semibold'>ADMISSION FORM</h1>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8 ">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="mb-4">
                <label htmlFor="sex" className="block text-gray-700 text-sm font-bold mb-2">Sex</label>
                <select id="sex" name="sex" value={formData.sex} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="courseFirstChoice" className="block text-gray-700 text-sm font-bold mb-2">Course (First Choice)</label>
                <select id="courseFirstChoice" name="courseFirstChoice" value={formData.courseFirstChoice} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="">Select</option>
                {courseOptions.map((course, index) => (
                    <option key={index} value={course}>{course}</option>
                ))}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="courseSecondChoice" className="block text-gray-700 text-sm font-bold mb-2">Course (Second Choice)</label>
                <select id="courseSecondChoice" name="courseSecondChoice" value={formData.courseSecondChoice} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="">Select</option>
                {courseOptions.map((course, index) => (
                    <option key={index} value={course}>{course}</option>
                ))}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="mb-4">
                <label htmlFor="guardiansPhoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Guardian's Phone Number</label>
                <input type="tel" id="guardiansPhoneNumber" name="guardiansPhoneNumber" value={formData.guardiansPhoneNumber} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>

            <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                <textarea id="address" name="address" value={formData.address} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"></textarea>
            </div>

            <div className="flex items-center justify-between">
                <button type="submit" className="bg-[#925FE2] hover:bg-[#8459c9] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit
                </button>
            </div>
        </form>
    </div>
  );
};

export default Admissionform;
