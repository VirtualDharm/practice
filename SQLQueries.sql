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
SELECT distinct(city) 
FROM patients
where province_id = 'NS'
select first_name,last_name,birth_date
from patients
where height > 160 and weight > 70
select first_name,last_name,allergies
from patients
where allergies is not NULL and city = 'Hamilton'
select distinct(YEAR(birth_date))
from patients
order by birth_date
select first_name
from patients
group by first_name
HAVING COUNT(first_name) = 1
select patient_id,first_name
from patients
where first_name like 's%s' and len(first_name)>5
select p.patient_id,p.first_name,p.last_name
from patients p
join admissions a on p.patient_id = a.patient_id
where a.diagnosis = 'Dementia'
SELECT allergies, COUNT(*) as allergy_count
FROM your_table_name
WHERE allergies IS NOT NULL
GROUP BY allergies
ORDER BY allergy_count DESC