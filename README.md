# Hostpital_API__CN
An API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients. There can be two types of Users,
**Doctors** and **Patients**. Doctors can log in. Doctors can register patients in the app(using phone number). Doctors can create reports of patients.

## Installation
1. Clone this repository
```
https://github.com/amanpatel23/XCSV
```
2. Install the dependencies
```
npm install
```
3. run the application
```
npm start
```
4. visit this url in your browser
```
localhost:8000 
```

## Routes
1. Route for registering the doctor. It'll require the form body data, **email**, **username**, **password**. And email should be unique for each doctor.
[localhost:8000/api/v1/doctors/register](localhost:8000/api/v1/doctors/register)
