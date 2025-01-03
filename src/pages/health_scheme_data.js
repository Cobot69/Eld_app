//health_scheme_data.js//

const policies = [
    {
      name: "Activ One",
      emi: 1571,
      cover: 5,
      html: `
        <div class="policy-card">
          <div class="plan-header">
            <h3></h3>
            <p>Comprehensive coverage for all your needs.</p>
          </div>
          <ul class="plan-benefits">
            <li>No Room Rent Limit</li>
            <li>₹5 Lakh Renewal Bonus</li>
            <li>Unlimited Restoration of cover</li>
          
            <a href="https://health.policybazaar.com/product-detail?encenq=..." class="explore-button">Explore</a>
          </ul>
        </div>`
    },
    {
      name: "Care Supreme",
      emi: 1209,
      cover: 5,
      html: `
        <div class="policy-card">
          <div class="plan-header">
            <h3></h3>
            <p>Designed for advanced care and comfort.</p>
          </div>
          <ul class="plan-benefits">
            <li>20% co-payment for non-network treatments</li>
            <li>Single Pvt AC Room</li>
            <li>Unlimited Restoration of cover</li>
          
            <a href="https://health.policybazaar.com/product-detail?encenq=..." class="explore-button">Explore</a>
          </ul>
        </div>`
    },
    // Add other policies in similar format
    {
      name: "Elevate Value",
      emi: 1482,
      cover: 5,
      html: `
        <div class="policy-card">
          <div class="plan-header">
            <h3></h3>
            <p>20% co-payment applicable on treatment outside the network list</p>
          </div>
          <ul class="plan-benefits">
            <li>₹1 lakh No Claim Bonus</li>
            <li>Twin sharing room</li>
            <li>Unlimited Restoration of cover</li>

            <a href="https://health.policybazaar.com/product-detail?encenq=dk5Ib3p1UFgvUmlGYTJyYXZNZ1FKOWc2K2JkSEpBZjNyclFBZUpWOWpxTT0&enquiryid=Njc4ODAxODgy&healthvisitid=117896522&k=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbnF1aXJ5SWQiOjY3ODgwMTg4MiwiRXhwaXJ5VGltZSI6MTczNDUxNjA4OSwiUm9sZSI6IiJ9.FFi6rJIku7Vj6gEDlAfNXzfdwA8hqG_9j5B2WgMsOzrdCFzQBwTXQPs6vFHQYU74EBHZqkhoo4h4R0aC37dI2csun_CaKhCyoWcIMsjsx78MJjkpsNnVJPvCOLzvKTBREe6MMp60LG0amYGozxM1MSdGF36kQvrDXuC5NuiUPCg&profileid=134267480" class="explore-button">Explore</a>
          </ul>
        </div>`
    },
    {
      name: "Super Star",
      emi: 1513,
      cover: 5,
      html: `
        <div class="policy-card">
          <div class="plan-header">
            <h3></h3>
            <p>A fully loaded plan with one-time unlimited claim, unlimited bonus, lock the age till 50, and other exciting features</p>
          </div>
          <ul class="plan-benefits">
            <li>₹2.5 lakh No Claim Bonus</li>
            <li>No Room Rent Limit</li>
            <li>Unlimited Restoration of cover</li>

            <a href="https://health.policybazaar.com/product-detail?encenq=NlVLTTNjc3U4Mk9KUUJDZy91MXZkSEpBZjNyclFBZUpWOWpxTT0&enquiryid=Njc4Nzk0NTc0&healthvisitid=117896522&k=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbnF1aXJ5SWQiOjY3ODc5NDU3NCwiRXhwaXJ5VGltZSI6MTczNDUxNTIwNCwiUm9sZSI6IiJ9.GG91oyNLBN8dKc1YQwaKqvpdkOMdLEm8HzpRfTbj0_NL9SXMkr0UnbZIjD-ZFmhzszC4CHlFXyXJzBcUtTZfD8OqNIXrfEIDWo5xd9a3mAFfsgK-6OmegwyJE_cfrcsoVIoZ9aPrXz32zgqT644BOHKIM9fDw5yODqnF98m0RAU&profileid=134265833" class="explore-button">Explore</a>
          </ul>
        </div>`
    },
    {
      name: "My Health Care",
      emi: 1539,
      cover: 5,
      html: `
        <div class="policy-card">
          <div class="plan-header">
            <h3></h3>
            <p>5% Additional Discount for all covered members of age 35 years or below (Proposer needs to be covered)</p>
          </div>
          <ul class="plan-benefits">
            <li>₹1.25 lakh No Claim Bonus</li>
            <li>Single Pvt AC Room</li>
            <li>Unlimited Restoration of cover</li>

            <a href="https://health.policybazaar.com/product-detail?encenq=NllwZ1U1YURWL1NNU2NoT01qVFZFREI5ZTVUczhFTFRLb0VmN3diWTY2QT0&enquiryid=Njc4Nzk1OTYx&healthvisitid=117896522&k=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbnF1aXJ5SWQiOjY3ODc5NTk2MSwiRXhwaXJ5VGltZSI6MTczNDUxNTM3MiwiUm9sZSI6IiJ9.HMwVLAfyIYHxPxg084jD5GzmK5_4RPgR08jG7Knxsc7fcQ-ZVZZQtjbjGWbRQf9DMS5jUe6MB6oRlPjEy9R-EgamkceeYQNfHb9PPTRkPlfuKJ8jemB2F067U8uDFT6_yMQMDvRORz7uBgJZjcOB-kjaHeuiwir1xl4q_qE7dmc&profileid=134266178" class="explore-button">Explore</a>
          </ul>
        </div>`
    },
    
    {
      name: "Flexi Health",
      emi: 2102,
      cover: 5,
      html: `
        <div class="policy-card">
          <div class="plan-header">
            <h3></h3>
            <p>Feature-rich plan with in-built OPD and High-end Diagnostics Coverage</p>
          </div>
          <ul class="plan-benefits">
            <li>₹50,000 No Claim Bonus</li>
            <li>No Room Rent Limit</li>
            <li>Unlimited Restoration of cover</li>
            <a href="https://health.policybazaar.com/product-detail?encenq=a25MNzBiSTAxYklLblYzM0xZMENUenZmUjR0cUNvcnlWNkZTNWFLUVp5ND0&enquiryid=Njc4Nzk2ODky&healthvisitid=117896522&k=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbnF1aXJ5SWQiOjY3ODc5Njg5MiwiRXhwaXJ5VGltZSI6MTczNDUxNTQ3OSwiUm9sZSI6IiJ9.BT_yLPYgZM_Ki8a8yeUtbpS_hWH48SlJA1qT7jf_6_lWYf54qQAxM0YeHdHTv10qCkxi1U8jjDL56xtu0LFH9oUEY6joSIHryyxAA_ENoBzOsLf3TAPCZkPBl5fVltgdUgFT_fePl0fBcpUxEUcq_40_8J6ElbELOkjgWeKtJmI&profileid=134266367" class="explore-button">Explore</a>
          </ul>
        </div>`
    },
    
    {
      name: "Super Care Option",
      emi: 1305,
      cover: 5,
      html: `
        <div class="policy-card">
          <div class="plan-header">
            <h3></h3>
            <p>Additional 15% discount included in the premium</p>
          </div>
          <ul class="plan-benefits">
            <li>₹25,000 No Claim Bonus</li>
            <li>No Room Rent Limit</li>
            <li>Unlimited Restoration of cover</li>
          
            <a href="https://health.policybazaar.com/product-detail?encenq=K3RDand2Y05SdnF1R21reStwZmtmczVJN1RPSWk2SGVhbG5HblptZEgyQT0&enquiryid=Njc4Nzk4ODQy&healthvisitid=117896522&k=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbnF1aXJ5SWQiOjY3ODc5ODg0MiwiRXhwaXJ5VGltZSI6MTczNDUxNTcyMywiUm9sZSI6IiJ9.APcOpvLV8Odbw2X3u8IzCKPZqUq_IVe1WiYCeHP3PdO1xSOEmcEfhEM7MeoHkLVyk5h-Xf_aC3AL6oNFHAE9GqhsdK3ADg3HhckU1c1DT2uSW5ENdvcMRzUBvijimpb1DFu9S3SKKCVHBr70j9sc_WKGUoWHJJEy7RQhhdW3fQQ&profileid=134266804" class="explore-button">Explore</a>
          </ul>
        </div>`
    },
    {
      name: "Optima Secure",
      emi: 2555,
      cover: 5,
      html: `
        <div class="policy-card">
          <div class="plan-header">
            <h3></h3>
            <p>2x coverage from Day 1 with 400% increase in cover after 2 renewals.</p>
          </div>
          <ul class="plan-benefits">
            <li>₹2.5 lakh Renewal Bonus</li>
            <li>No Room Rent Limit</li>
            <li>Unlimited Restoration of cover</li>
          
            <a href="https://health.policybazaar.com/product-detail?encenq=VDJyZ214SlNhRVB3ZE11YzhudmRxbjlnQXV6VFlHbkNHdXZlZ1o1YkRSMD0&enquiryid=Njc4Nzk5NzUw&healthvisitid=117896522&k=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbnF1aXJ5SWQiOjY3ODc5OTc1MCwiRXhwaXJ5VGltZSI6MTczNDUxNTgzMiwiUm9sZSI6IiJ9.G__f0RPL2SP4MJ2GciANPZvdb4HOQGhJTwcJHWPa2t5G_o_FNCh_nhXAoBKtnOvqapUjKfRvZtwSbiJ9A6ILSzJ0aZYeGvVTK3TGk8B5xxUbgt5Ba9iW3cFFYwkbPjA6kBX0PBaWZ_lEEekUh0pdkKqwatyZS7iFF2o2e7Kcyrk&profileid=134266989" class="explore-button">Explore</a>
          </ul>
        </div>
      `
    },
    {
      name: "Medicare Premier",
      emi: 2152,
      cover: 10,
      html: `
        <div class="policy-card">
          <div class="plan-header">
            <h3></h3>
            <p>Feature-rich plan with in-built OPD and High-end Diagnostics Coverage.</p>
          </div>
          <ul class="plan-benefits">
            <li>₹5 lakh Renewal Bonus</li>
            <li>No Room Rent Limit</li>
            <li>Restoration of cover once a year</li>
          
            <a href="https://health.policybazaar.com/product-detail?encenq=cUhzWHVsTm92L0NXL0lSWCt0RTBwQ0lpODFSVXFCWUY3a3U5ZkxaMVp5bz0&enquiryid=Njc5NzczNzQ4&k=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbnF1aXJ5SWQiOjY3OTc3Mzc0OCwiRXhwaXJ5VGltZSI6MTczNDY5ODI5OCwiUm9sZSI6bnVsbH0.DT1VYzGtpTo7w4Y4L0WcY841nQrwTHk_7y0Z-xTXVXP_HfJeMCJRYcLRcAZWcpS-1dXBL4QgQ1OteWtk2AmUbrQBFIfTGI6GV546g4dyjze69Sj4IxwbqONuiL6_xx9aitoDDpSJp7ilTGSfvVFBWCYuqBEzik8e7ZDMbmuDL_g&new=1&pq=health0&profileid=134461301&utm_content=hp_signed_health_insurance_dom" class="explore-button">Explore</a>
          </ul>
        </div>
      `
    },
    {
      name: "Health Infinity",
      emi: 1552,
      cover: 10,
      html: `
        <div class="policy-card">
          <div class="plan-header">
            <h3></h3>
            <p>Additional 1 month coverage with 1-year plan or 2 months with a 2-year plan.</p>
          </div>
          <ul class="plan-benefits">
            <li>₹2 lakh Renewal Bonus (optional)</li>
            <li>No Room Rent Limit</li>
            <li>Unlimited Restoration of cover</li>
          
            <a href="https://health.policybazaar.com/product-detail?encenq=cUhzWHVsTm92L0NXL0lSWCt0RTBwQ0lpODFSVXFCWUY3a3U5ZkxaMVp5bz0&enquiryid=Njc5NzczNzQ4&k=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbnF1aXJ5SWQiOjY3OTc3Mzc0OCwiRXhwaXJ5VGltZSI6MTczNDY5ODI5OCwiUm9sZSI6bnVsbH0.DT1VYzGtpTo7w4Y4L0WcY841nQrwTHk_7y0Z-xTXVXP_HfJeMCJRYcLRcAZWcpS-1dXBL4QgQ1OteWtk2AmUbrQBFIfTGI6GV546g4dyjze69Sj4IxwbqONuiL6_xx9aitoDDpSJp7ilTGSfvVFBWCYuqBEzik8e7ZDMbmuDL_g&new=1&pq=health0&profileid=134461301&utm_content=hp_signed_health_insurance_dom" class="explore-button">Explore</a>
          </ul>
        </div>
      `
    },
    
    {
      name: "Sarvah - Uttam",
      emi: 1248,
      cover: 10,
      html: `
        <div class="policy-card">
          <div class="plan-header">
            <h3></h3>
            <p>A feature-rich plan with the option to increase coverage up to unlimited SI for specific diseases.</p>
          </div>
          <ul class="plan-benefits">
            <li>₹10 lakh Renewal Bonus (optional)</li>
            <li>Single private AC room</li>
            <li>Unlimited Restoration of cover optional</li>
          
            <a href="https://health.policybazaar.com/product-detail?encenq=cUhzWHVsTm92L0NXL0lSWCt0RTBwQ0lpODFSVXFCWUY3a3U5ZkxaMVp5bz0&enquiryid=Njc5NzczNzQ4&k=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbnF1aXJ5SWQiOjY3OTc3Mzc0OCwiRXhwaXJ5VGltZSI6MTczNDY5ODI5OCwiUm9sZSI6bnVsbH0.DT1VYzGtpTo7w4Y4L0WcY841nQrwTHk_7y0Z-xTXVXP_HfJeMCJRYcLRcAZWcpS-1dXBL4QgQ1OteWtk2AmUbrQBFIfTGI6GV546g4dyjze69Sj4IxwbqONuiL6_xx9aitoDDpSJp7ilTGSfvVFBWCYuqBEzik8e7ZDMbmuDL_g&new=1&pq=health0&profileid=134461301&utm_content=hp_signed_health_insurance_dom" class="explore-button">Explore</a>
          </ul>
        </div>
      `
    },
    {
      name: "LiveWise",
      emi: 1431,
      cover: 10,
      html: `
        <div class="policy-card">
          <div class="plan-header">
            <h3></h3>
          </div>
          <ul class="plan-benefits">
            <li>₹5 lakh Renewal Bonus</li>
            <li>No room rent limit</li>
            <li>Unlimited Restoration of cover</li>
          
            <a href="https://health.policybazaar.com/quotes?encenq=WXNHMmgwNzNMeitnbWU5S0F3aXZBZExrVlhpUko3NW1GeGozL1NOVGJoZz0&enquiryid=Njc5NzYxNzM4&featurePlanId=81452&featureSumInsured=1000000&featureSupplierId=55&fpop=true&gad_source=1&gclid=CjwKCAiAjKu6BhAMEiwAx4UsAkUio5pjj-p26qV2Bxd0MZie3YqDt2HEjEYh7mWu8ffN-dJbJZ-QqRoC8yIQAvD_BwE&k=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbnF1aXJ5SWQiOjY3OTc2MTczOCwiRXhwaXJ5VGltZSI6MTczNDY5NjY2NywiUm9sZSI6bnVsbH0.R2Gk6jJZj41j486OOcItKYS4RABlfKotX60y4sCxPILWaB0u9rYinfENHEYf-Q1FMHdlStBI5LEeQlZHtzytHoEpiAxdTvwBy1CCMLfYnewUh6A2UOHiQv-0AgwRojbilMyDl5_q1kvD-Ekr_e7Y_CGELWxkmgsbjUJRa1K_NGo&loc_interest_ms=&loc_physical_ms=9152783&new=1&offerid=9&pb_campaign=Core_Desktop_18_2400Senior_Citizen_Health_Insurance_networkg&pb_medium=cpc&pb_source=momentus&pb_term=Health%20insurance%20for%20senior%20citizens&profileid=134458463&sifrom=1000000&sito=2400000" class="explore-button">Explore</a>
          </ul>
        </div>
      `
    },
    {
      name: "One Health Support",
      emi: 2686,
      cover: 25,
      html: `
        <div class="policy-card">
          <div class="plan-header">
            <h3></h3>
          </div>
          <ul class="plan-benefits">
            <li>₹1 lakh No Claim Bonus</li>
            <li>No room rent limit</li>
            <li>Restoration cover 5 times a year</li>
          
            <a href="https://health.policybazaar.com/quotes?encenq=cUhzWHVsTm92L0NXL0lSWCt0RTBwQ0lpODFSVXFCWUY3a3U5ZkxaMVp5bz0&enquiryid=Njc5NzczNzQ4&featurePlanId=505&featureSumInsured=2500000&featureSupplierId=52&fpop=true&k=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbnF1aXJ5SWQiOjY3OTc3Mzc0OCwiRXhwaXJ5VGltZSI6MTczNDY5ODI5OCwiUm9sZSI6bnVsbH0.DT1VYzGtpTo7w4Y4L0WcY841nQrwTHk_7y0Z-xTXVXP_HfJeMCJRYcLRcAZWcpS-1dXBL4QgQ1OteWtk2AmUbrQBFIfTGI6GV546g4dyjze69Sj4IxwbqONuiL6_xx9aitoDDpSJp7ilTGSfvVFBWCYuqBEzik8e7ZDMbmuDL_g&new=1&pq=health0&profileid=134461301&sifrom=2500000&sito=9900000&utm_content=hp_signed_health_insurance_dom" class="explore-button">Explore</a>
          </ul>
        </div>
      `
    },
    {
      name: "Next Gen",
      emi: 2730,
      cover: 25,
      html: `
        <div class="policy-card">
          <div class="plan-header">
            <h3></h3>
          </div>
          <ul class="plan-benefits">
            <li>₹2.5 lakh No Claim Bonus</li>
            <li>Single private AC room</li>
            <li>Restoration cover once a year</li>
          
            <a href="https://health.policybazaar.com/quotes?encenq=cUhzWHVsTm92L0NXL0lSWCt0RTBwQ0lpODFSVXFCWUY3a3U5ZkxaMVp5bz0&enquiryid=Njc5NzczNzQ4&featurePlanId=77264&featureSumInsured=2500000&featureSupplierId=9&fpop=true&k=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbnF1aXJ5SWQiOjY3OTc3Mzc0OCwiRXhwaXJ5VGltZSI6MTczNDY5ODI5OCwiUm9sZSI6bnVsbH0.DT1VYzGtpTo7w4Y4L0WcY841nQrwTHk_7y0Z-xTXVXP_HfJeMCJRYcLRcAZWcpS-1dXBL4QgQ1OteWtk2AmUbrQBFIfTGI6GV546g4dyjze69Sj4IxwbqONuiL6_xx9aitoDDpSJp7ilTGSfvVFBWCYuqBEzik8e7ZDMbmuDL_g&new=1&pq=health0&profileid=134461301&sifrom=2500000&sito=9900000&utm_content=hp_signed_health_insurance_dom" class="explore-button">Explore</a>
          </ul>
        </div>
      `
    }

  ];
  
  export default policies;
  