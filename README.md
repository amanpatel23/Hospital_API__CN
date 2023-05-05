# Hostpital_API__CN
An API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients. There can be two types of Users,
**Doctors** and **Patients**. Doctors can log in. Doctors can register patients in the app(using phone number). Doctors can create reports of patients.

## Installation
1. Clone this repository
```
https://github.com/amanpatel23/Hospital_API__CN
```
2. Install the dependencies
```
npm install
```
3. run the application
```
npm start
```

## Routes
1. Route for registering the doctor. It'll require three form fields, `email`, `username` and `password`. And email should be unique for each doctor.
```
POST: localhost:8000/api/v1/doctors/register
```

2. Route for the doctor login. It'll require two form fields, `email` and `password`. It returns the `JWT` token, which is used for the authorization.
```
POST: localhost:8000/api/v1/doctors/login
```

3. Route for registering the patient. It'll require the `JWT token` for the authorization and two form fields `phone` and `name`. And phone should be of length 10.
```
POST: localhost:8000/api/v1/patients/register
```

4. Route for creating a report of the patient. It'll require the `JWT token` for the authorization, `patient_id` as the string param and `status` as the only form filed. And status can only take any one of these four values **Negative**, **Travelled-Quarantine**, **Symptoms-Quarantine** and **Positive-Admit**.
```
POST: localhost:8000/api/v1/patients/:id/create_report
```

5. Route for getting all the reports of a patient. It'll only take `patient_id` as the string param.
```
GET: localhost:8000/api/v1/patients/:id/all_reports
```

6. Route for getting all the patient reports that has a particular status. It'll only take `status` as the string param.
```
GET: localhost:8000/api/v1/reports/:status
```
