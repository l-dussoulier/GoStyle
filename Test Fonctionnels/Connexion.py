import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service

service = Service('/Users/louis/Desktop/chromedriver')
service.start()
driver = webdriver.Remote(service.service_url)
driver.set_window_size(375,1000)
driver.get('http://localhost:19006/')
driver.find_element_by_id("user").send_keys("louis")
driver.find_element_by_id("password").send_keys("louis")
time.sleep(2);
driver.find_element_by_id("connexion").click()
