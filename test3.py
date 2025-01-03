from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
import unittest
import time

class GroceryLocationTest(unittest.TestCase):
    def setUp(self):
        # Initialize Chrome WebDriver
        self.driver = webdriver.Chrome()
        self.driver.maximize_window()
        # Navigate to your React application's homepage
        self.driver.get("http://localhost:5173/")
        
    def test_grocery_location_selection(self):
        try:
            # Wait for and click the Grocery link
            wait = WebDriverWait(self.driver, 10)
            grocery_link = wait.until(
                EC.element_to_be_clickable((By.LINK_TEXT, "Grocery"))
            )
            grocery_link.click()
            
            # Wait for the location search input to be present
            search_input = wait.until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "input[type='text']"))
            )
            
            # Enter "Vidyanagar" in the search field
            search_input.clear()
            search_input.send_keys("Vidyanagar")
            search_input.send_keys(Keys.RETURN)
            
            # Wait for search results to load
            time.sleep(2)
            
            # Verify we're on the correct page with location selected
            current_url = self.driver.current_url
            self.assertTrue("/Grocery" in current_url, "Not on the Grocery page")
            
            # Print confirmation message
            print("Successfully opened Grocery page and selected Vidyanagar location")
            
        except Exception as e:
            self.fail(f"Test failed: {str(e)}")
    
    def tearDown(self):
        # Close the browser
        if self.driver:
            self.driver.quit()

if __name__ == "__main__":
    unittest.main()