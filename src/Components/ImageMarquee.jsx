import React from 'react';
import Marquee from 'react-fast-marquee';

const ImageMarquee = () => {
  const images = [
    { src: require('../Assets/him_block.jpg'), title: 'Dept of Health Information Management' },
    { src: require('../Assets/img02.jpg'), title: 'Entrance' },
    { src: require('../Assets/ict_building.jpg'), title: 'ICT block' },
    { src: require('../Assets/ict_lab.jpg'), title: 'ICT lab' },
    { src: require('../Assets/img03.jpg'), title: 'Entrance' },
    { src: require('../Assets/chblock.jpg'), title: 'Department of Community Health' },
    { src: require('../Assets/chblock2.jpg'), title: 'Community Health Block' },
    { src: require('../Assets/dot_block.jpg'), title: 'Department of Optometry & Dispensary Technician' },
    { src: require('../Assets/gp.jpg'), title: 'GP Tanks' },
    { src: require('../Assets/hostel.jpg'), title: 'On campus Hostel' },
    { src: require('../Assets/power_house.jpg'), title: 'Power House' },
    { src: require('../Assets/lab.jpg'), title: 'Biology Lab' },
    { src: require('../Assets/medlab_block.jpg'), title: 'Department of Medical Laboratory Science' },
    { src: require('../Assets/schoolclinic.jpg'), title: 'School Clinic' },
    { src: require('../Assets/school_bus.jpg'), title: 'School Bus' },
    
  ];

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-12">
      <Marquee gradient={false} speed={50}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="mx-4 flex flex-col items-center">
              <img
                src={image.src}
                alt={image.title}
                className="w-auto h-[250px] rounded-lg shadow-md object-cover"
              />
              <p className="mt-2 text-center text-sm font-medium text-gray-700 max-w-[200px]">
                {image.title}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ImageMarquee;

