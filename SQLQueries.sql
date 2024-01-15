select first_name,last_name from patients where gender = 'M'
select first_name, last_name from patients where allergies is NULL
select first_name from patients where first_name like 'C%'
select first_name, last_name from patients where weight between 100 and 120
update patients set allergies = 'NKA' where allergies IS NULL
select first_name || ' ' || last_name as full_name from patients
SELECT P.first_name,P.last_name,Pr.province_name FROM Patients P JOIN Province_names Pr ON P.province_id = Pr.province_id;SELECT COUNT(*) AS NumberOfPatients FROM Patients WHERE YEAR(birth_date) = 2010
select first_name,last_name,height from patients ORDER BY height DESC LIMIT 1
select * 
from patients
where patient_id iN (1,45,534,879,1000)
select count(patient_id) 
from admissions
select * 
from admissions
where admission_date = discharge_date
select patient_id, count(admission_date)
from admissions
where patient_id = 579