from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import unittest
import time

class ElderNetNavigationTest(unittest.TestCase):
    def setUp(self):
        # Initialize the Chrome WebDriver
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        # Navigate to your React application's URL
        self.driver.get("http://localhost:5173/")
        
    def test_ambulance_and_grocery_links(self):
        # List of navigation items to test
        nav_items = {
            "Ambulance": "/Ambulance",
            "Grocery": "/Grocery"
        }
        
        # Test each navigation link
        for link_text, expected_url in nav_items.items():
            try:
                # Wait for the element to be clickable
                wait = WebDriverWait(self.driver, 10)
                link = wait.until(
                    EC.element_to_be_clickable((By.LINK_TEXT, link_text))
                )
                
                # Click the link
                link.click()
                
                # Give the page time to load
                time.sleep(1)
                
                # Check if we're on the expected URL
                current_url = self.driver.current_url
                self.assertTrue(current_url.endswith(expected_url))
                
                # Navigate back to home page for next test
                self.driver.get("http://localhost:5173/")
                
            except Exception as e:
                self.fail(f"Navigation test failed for {link_text}: {str(e)}")
    
    def tearDown(self):
        # Close the browser
        if self.driver:
            self.driver.quit()

if __name__ == "__main__":
    unittest.main()