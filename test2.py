# for this grocery page check test case that it should search location vidyanagar press phone number of Ravi Supermart this i will save as test2.py

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
import unittest
import time

class GrocerySearchTest(unittest.TestCase):
    def setUp(self):
        # Initialize Chrome WebDriver
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        # Navigate to your React application's homepage
        self.driver.get("http://localhost:5173/")
        
    def test_grocery_search_and_phone(self):
        try:
            # Wait for and click the Grocery link
            wait = WebDriverWait(self.driver, 10)
            grocery_link = wait.until(
                EC.element_to_be_clickable((By.LINK_TEXT, "Grocery"))
            )
            grocery_link.click()
            
            # Wait for the search input to be present
            search_input = wait.until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "input[type='text']"))
            )
            
            # Enter "Vidyanagar" in the search field
            search_input.clear()
            search_input.send_keys("Vidyanagar")
            search_input.send_keys(Keys.RETURN)
            
            # Wait for search results to load
            time.sleep(2)
            
            # Look for Ravi Supermart in the results
            ravi_supermart = wait.until(
                EC.presence_of_element_located((By.XPATH, "//*[contains(text(), 'Ravi Supermart')]"))
            )
            
            # Find and verify the phone number
            # Note: Update the XPath according to your actual HTML structure
            phone_number = wait.until(
                EC.presence_of_element_located((By.XPATH, "//div[contains(text(), 'Ravi Supermart')]/following-sibling::div[contains(@class, 'phone')]"))
            )
            
            # Get the phone number text
            phone_text = phone_number.text
            
            # Print the found phone number
            print(f"Found phone number: {phone_text}")
            
            # Verify the element exists and contains a phone number
            self.assertIsNotNone(phone_number, "Phone number element not found")
            self.assertTrue(len(phone_text.strip()) > 0, "Phone number is empty")
            
        except Exception as e:
            self.fail(f"Test failed: {str(e)}")
    
    def tearDown(self):
        # Close the browser
        if self.driver:
            self.driver.quit()

if __name__ == "__main__":
    unittest.main()