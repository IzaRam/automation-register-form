from selenium import webdriver
from users_faker import generate_users
from selenium.webdriver.support.ui import Select
import sys

driver = webdriver.Chrome("/usr/bin/chromedriver")

n = int(sys.argv[1])

users = generate_users(n)

for user in users:

    try:
        driver.get("http://localhost:4200")

        gender = "id_gender_1" if user['gender'] == 'F' else "id_gender_2"

        driver.find_element_by_id(gender).click()

        driver.find_element_by_name("first-name").send_keys(user['first_name'])

        driver.find_element_by_name("last-name").send_keys(user['last_name'])

        driver.find_element_by_name("email").send_keys(user['email'])

        driver.find_element_by_name("password").send_keys(user['password'])

        select = Select(driver.find_element_by_name("day"))
        select.select_by_visible_text(user['day'])

        select = Select(driver.find_element_by_name("month"))
        select.select_by_value(str(int(user['month']) - 1))

        select = Select(driver.find_element_by_name("year"))
        select.select_by_visible_text(user['year'])

        driver.find_element_by_name("address1").send_keys(user['address1'])

        driver.find_element_by_name("address2").send_keys(user['address2'])

        driver.find_element_by_name("city").send_keys(user['city'])

        select = Select(driver.find_element_by_name("state"))
        select.select_by_visible_text(user['state'].title())

        driver.find_element_by_name("zip").send_keys(str(user['postal_code']))

        select = Select(driver.find_element_by_name("country"))
        select.select_by_visible_text("United States");


        submit_button = driver.find_element_by_xpath('/html/body/app-root/div/form/div[13]/button')
        driver.execute_script("arguments[0].click()", submit_button)

    except Exception as e:
        print(e)

driver.quit()
