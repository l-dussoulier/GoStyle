import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service

service = Service('/Users/louis/Desktop/chromedriver')
service.start()
driver = webdriver.Remote(service.service_url)
driver.set_window_size(375,1000)
driver.get('http://localhost:19006/')
time.sleep(1)
driver.find_element_by_id("condition").click()



