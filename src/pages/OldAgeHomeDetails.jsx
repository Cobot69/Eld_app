import React from 'react';

import { useParams } from 'react-router-dom';


const OldAgeHomeDetails = () => {
  const { id } = useParams();

  const oldAgeHomes = [
    {
      id: 1,
      name: "Sandhya Kirana Old Age Home",
      location: "Keshwapur, Hubballi, Karnataka",
      type: "Paid",
      category: "Private",
      facilities: ["Premium Accommodation", "Routine Health Checkups", "Wholesome Nutritious Meals"],
      phone: "9448122733",
      description: "This is a premium old age home located in Hubballi.",
      detailedDescription:
        "Sandhya Kirana is a paid old age home in the peaceful neighborhood of Keshwapur, Hubballi.  Known for its hygienic and well-structured environment, the home offers senior citizens a safe, comfortable, and homely living experience. Currently, it houses 25 residents and accepts both male and female admissions, with accommodations designed to ensure privacy and comfort for everyone. The home is situated away from noisy areas, resulting in low noise pollution and a serene atmosphere ideal for elderly residents. Residents are provided with fully nutritious meals prepared in a clean and hygienic kitchen, catering to their health and dietary needs. Regular medical checkups are conducted to ensure their overall well-being. Sandhya Kirana values the importance of family connections and encourages family visits, creating a welcoming atmosphere for loved ones. The home allows residents to maintain meaningful bonds with their families, reinforcing the home-like feeling and emotional well-being. With its friendly and caring staff, peaceful surroundings, and emphasis on hygiene, nutrition, and family engagement, Sandhya Kirana is an excellent choice for senior citizens seeking comfort, care, and a supportive community in Keshwapur, Hubballi.",
      gallery: [
        "https://threebestrated.in/images/SandhyaKiranaOldAgeHome-HubballiDharwad-KA.jpeg", // Local images
      "https://threebestrated.in/images/SandhyaKiranaOldAgeHome-HubballiDharwad-KA-2.jpeg",
      "https://www.theparentscare.com/storage/avatar/cfad297c8073d05c7185f973beebcb66_1594570755.jpg",
      "https://www.theparentscare.com/storage/services/250x200/c7549a0540914f69be9bbc7b90cb3883_1594570755.jpg"
      ],
    },
    {
      id: 2,
      name: "Shine Home",
      location: "Tarihal, Hubballi, Karnataka",
      type: "Free",
      category: "Government",
      facilities: ["24/7 nursing care", "Regular Checkups", "Indoor Games"],
      phone: "9663056331",
      description: "Shine Home is a government-supported old age home.",
      detailedDescription:
        "Shine Trust, located in the heart of Hubli at #01, Block 26, Akshay Town, Tarihal, Karnataka - 580026, is a Senior Citizen Center dedicated to empowering elderly lives. Founded with a vision to build a society where elders are healthy, empowered, encouraged, and socially integrated with dignity. Shine Trust offers a supportive community that values independence, friendships, and a healthy lifestyle. Their mission is to serve elderly citizens holistically, enabling them to live fulfilling lives through comprehensive care provided with love and affection. The center provides exceptional medical care and creates opportunities for active, engaged, and purposeful living. Shine Trust enriches the aging experience not only for residents but also for their families, staff, and the greater community.",
      gallery: [
        "https://shinetrust.org.in/images/976/9280964/img26.jpg",
        "https://shinetrust.org.in/images/1024/9365817/006.jpg",
        "https://i.postimg.cc/kgckZKcd/shine1.jpg",
        "https://i.postimg.cc/QNTvDRbm/shine4.jpg"
      ],
    },
    { id: 3,
      name: "Jeevan Sandhya Old Age Home",
      location: "NH63, Kadankoppa, Chalamatti, Karnataka 581204",
      type: "Paid",
      category: "Private",
      photo: "https://lh5.googleusercontent.com/p/AF1QipNtuW4uOVulBJmrJUJr8JToi17KYxO7Cov_SjwP=w203-h134-k-no",
      facilities: ["Weekly 2 time visit doctor ( free of Checkup)", "Nutritious meals", "Yearly trips"],
      phone: "916-475-3102",
      description: "Shine Home is a government-supported old age home.",
      detailedDescription:
        "Jeevan Sandhya concept was the dream project of Vidyaranya Seva Sangha, a nonprofit social organization. Located slightly off the main Karwar Road amidst greenery, providing a peaceful environment. Offers independent, semi, and multi-dwellings designed with modern amenities in a serene atmosphere. Supported by various institutions, the home celebrates events like drama, pravachanas, sangeet, and student performances. Aims to maintain smiling faces and the dignity of its residents in a vibrant and engaging community.",
      gallery: [
        "https://tse2.mm.bing.net/th?id=OIP.UNUtAwR9ku7gmTRIiieUBwHaCk&pid=Api&P=0&h=180",
        "http://jeevansandhyahubli.com/img/slider/2.jpg",
        "https://www.jeevansandhyahubli.com/img/slider/1.jpg",
        "https://tse4.mm.bing.net/th?id=OIP.a-n2sBYU-Fyl7NetKg2-kAHaE7&pid=Api&P=0&h=180",
      ],
    },
    { id: 4,
      name: "Anand Ashram Old Age Home Dharwad",
      location: "Salakinakoppa, Dharwad - Haliyal Rd, Dharwad, Karnataka 580118",
      type: "Free",
      category: "Government",
      photo: "https://lh5.googleusercontent.com/p/AF1QipOhfswRnlqMEOHepDa4kCAQN6Jme3aKlwtMGql6=w203-h152-k-no",
      facilities: ["Nutritious meals", "Group therapy", "Transportation"],
      phone: "994-533-9169",
      description: "Shine Home is a government-supported old age home.",
      detailedDescription:
        "Anand Ashram is one of the biggest and best old age homes in North Karnataka, situated in Salkinkoppa, near Haliyal Road in the Dharwad district. Provides a peaceful and supportive atmosphere for senior citizens. Offers comfortable, privacy-focused accommodations tailored to the needs of elderly residents. Regular medical check-ups and access to healthcare services are provided to ensure the health of residents. Residents are served nutritious, well-balanced meals catering to their dietary needs. Emphasizes mental and physical engagement through various recreational activities. Dedicated and compassionate staff members create a caring, home-like environment. Aims to offer elderly individuals a peaceful, compassionate living experience, with care, companionship, and well-being as top priorities.",
      gallery: [
      "https://i.postimg.cc/nLpPGrbw/anand1.png",
      "https://i.postimg.cc/G2pg6fpF/anand2.png",
        "https://i.postimg.cc/j2p8wd4c/anand3.png",
        "https://i.postimg.cc/3N4SxDmW/anand4.png",
      ],
    },
    {  id: 5,
      name: "Maitri Vrudhashrama",
      location: "Shivanand Nagar, Hubballi, Karnataka 580025",
      type: "Free",
      category: "Government",
      photo: "https://lh5.googleusercontent.com/p/AF1QipNzxmEsyZ8aLeVO45gG-SAbKJWB-zlUMYf36Ghi=w152-h86-k-no",
      facilities: ["Complete residential facilities", "Nursing care", "Education and vocational training", "Basic amenities and medical assistance"],
      phone: "7795891828",
      description: "Shine Home is a government-supported old age home.",
      detailedDescription:
        "Maithri Vrudashrama is a free old age home located in Bairidevarakoppa, Hubballi. It provides care and support to elderly residents, ensuring their comfort and well-being. The ashram houses 25 senior citizens, with a team of 5 dedicated and compassionate staff members. The peaceful surroundings and serene atmosphere make it an ideal place for elders to live with dignity. Residents enjoy a clean and comfortable living environment with regular medical checkups and nutritious meals. Bhajans and spiritual activities foster a sense of community and mental well-being. Separate accommodations for men and women ensure privacy and comfort.",
      gallery: [
      "https://i.postimg.cc/tCh03LnJ/maithri1.png",
        "https://i.postimg.cc/QMdRrC4K/maithri2.png",
        "https://i.postimg.cc/WzkBfy99/maithri3.jpg",
           "https://i.postimg.cc/PrGs8tx0/maithri4.jpg"        
      ],
    },
    { id : 6,
      name: "Basavashri Old Age Home ",
      location: "2nd Cross, Omkar Building, Bus Stand, Gokul Rd, near Niketan Heritage, Dollars Hights, behind New KSRTC, Dollars Colony, Chaitanya Nagar, Rajendra Nagar, Hubballi, Karnataka 580030",
      type: "Paid",
      category: "Private",
      photo: "https://lh5.googleusercontent.com/p/AF1QipMmAAVjLiLRvGgiCOeGQMkf-vGtG6Crw23_40fB=w114-h86-k-no",
      facilities: ["Affordable and comfortable stay", "Day care", "Medical check-ups", "Recreational activities"],
      phone: "972-690-0047",
      description: "Shine Home is a government-supported old age home.",
      detailedDescription:
        "Basavashri Old Age Home is a well-maintained facility with two branches in Hubballi, designed to provide a safe and comfortable environment for senior citizens. One branch is located in the city, while the other is in Anchatgeri, 9 kilometers from Hubballi. The Anchatgeri branch is surrounded by nature, offering fresh air and a peaceful environment that is ideal for elderly residents to live in comfort. The Hubballi branch currently houses 25 residents, while the Anchatgeri branch accommodates 50. The home offers both free and paid admission. For free admission, the individual must be declared homeless by the local police station and provide a letter as proof. Paid admissions are also available at a reasonable fee. Both branches provide all basic facilities, including regular medical checkups, clean living spaces, and nutritious meals. The staff are friendly and attentive, ensuring every resident feels cared for.",
      gallery: [
        "https://lh5.googleusercontent.com/p/AF1QipMmAAVjLiLRvGgiCOeGQMkf-vGtG6Crw23_40fB=w114-h86-k-no",
        "https://i.postimg.cc/sDSznMqV/basavashri2.png",
        "https://i.postimg.cc/HkggFp1b/basavashri3.png",
        "https://i.postimg.cc/ht1BBHK6/basavashri4.png"
      ],
    },
    {id: 7,
      name: "SOCIETY OF ST.VINCENT DE PAUL HOME OF THE AGED",
      location: "946V+HX8, Bengeri Extension, Keshwapur, Hubballi, Karnataka 5800231",
      type: "Paid",
      category: "Private",
      photo: "vincet1.jpg",
      facilities: ["Compassionate and loving staff", "Nutritious meals", "Health and wellness programs", "Recreational activities"],
      phone: "9448300400",
      description: "Shine Home is a government-supported old age home.",
      detailedDescription:
        "Society of St. Vincent de Paul Home of the Aged is a well-maintained old age home designed to provide a serene and supportive environment for senior citizens. It is surrounded by lush greenery, fresh air, and a tranquil atmosphere, offering a peaceful retreat away from the hustle and bustle of city life. The facility accommodates both male and female residents in separate sections, ensuring privacy and comfort for everyone. Admission requires a one-time deposit of ₹15,000, followed by a monthly fee of ₹10,000 for this paid old age home. Residents enjoy hygienic, nutritious meals and benefit from timely medical facilities whenever needed. Staff are known for their friendliness and dedication, ensuring that every resident feels cared for and valued. The home boasts very low noise pollution, making it an ideal place for relaxation. Family members can visit their loved ones during the designated visiting hours from 10:00 AM to 1:00 PM and 4:00 PM to 6:00 PM. With its people-friendly ambiance and commitment to the well-being of its residents, this old age home is a sanctuary for senior citizens seeking comfort and care..",
      gallery: [
        "https://i.postimg.cc/W4yfLnqx/vincet1.jpg",
        "https://i.postimg.cc/jd69wPBJ/vincet2.jpg",
        "https://i.postimg.cc/9f0NnS0G/vincet3.jpg",
        "https://i.postimg.cc/8zt0wDpp/vincet4.jpg",
      ],
    }
  ];

  const home = oldAgeHomes.find((home) => home.id === parseInt(id));

  if (!home) return <p>Old Age Home not found!</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: 'white', color: 'black' }}>
      <h1>{home.name}</h1>
      <p><strong>Location:</strong> {home.location}</p>
      <p><strong>Type:</strong> {home.type}</p>
      <p><strong>Category:</strong> {home.category}</p>
      <p><strong>Facilities:</strong> {home.facilities.join(', ')}</p>
      <p><strong>Phone:</strong> {home.phone}</p>

      {/* Detailed Description */}
      <div style={{ margin: '20px 0' }}>
        <h2>About {home.name}</h2>
        <p style={{ lineHeight: '1.6', textAlign: 'justify' }}>{home.detailedDescription}</p>
      </div>

      {/* Image Gallery */}
      <div style={{ margin: '20px 0' }}>
        <h2>Gallery</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {home.gallery && home.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              style={{
                width: '200px',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '5px',
                boxShadow: '0 4px 6px rgba(181, 15, 15, 0.1)',
              }}
            />
          ))}
        </div>
      </div>

      <button
        style={{
          color: 'white',
          backgroundColor: '#3498db',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          borderRadius: '5px',
        }}
        onClick={() => window.history.back()}
      >
        Go Back
      </button>
    </div>
  );
};

export default OldAgeHomeDetails;
