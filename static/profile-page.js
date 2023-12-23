function togglePasswordVisibility() {
	var passwordField = document.getElementById("password");
	var passwordToggle = document.getElementById("password-toggle");

	if (passwordField.type === "password") {
	  passwordField.type = "text";
	  passwordToggle.innerText = "🫣";
	} else {
	  passwordField.type = "password";
	  passwordToggle.innerText = "👀";
	}
  }

  function freeze(event){
	document.getElementById("fname").disabled = true;
	document.getElementById("lname").disabled = true;
	document.getElementById("email").disabled = true;
	document.getElementById("password").disabled = true;
	document.getElementById("stream").disabled = true;
	document.getElementById("yearSelect1").disabled = true;
	document.getElementById("current_status").disabled = true;
	document.getElementById("course").disabled = true;
	document.getElementById("specialization").disabled = true;
    document.getElementById("yearSelect2").disabled = true;
	event.preventDefault();

}
  
function unfreeze(event){
	document.getElementById("fname").disabled = false;
	document.getElementById("lname").disabled = false;
	document.getElementById("email").disabled = false;
	document.getElementById("password").disabled = false;
	document.getElementById("stream").disabled = false;
	document.getElementById("yearSelect1").disabled = false;
	document.getElementById("current_status").disabled = false;
	document.getElementById("course").disabled = false;
	document.getElementById("specialization").disabled = false;
    document.getElementById("yearSelect2").disabled = false;
	event.preventDefault();

}

        function updateSpecializations() {
            // Get the selected course index
            var selectedCourseIndex = document.getElementById("course").selectedIndex;
            
            // Get the specialization dropdown element
            var specializationDropdown = document.getElementById("specialization");

            // Clear existing options
            specializationDropdown.innerHTML = "";

            // Populate the specialization dropdown based on the selected course index
            switch (selectedCourseIndex) {
				case 0:
					addOption(specializationDropdown,"select");
					break;
                case 1:
                    addOption(specializationDropdown,"select ");
                    addOption(specializationDropdown,"English");
                    addOption(specializationDropdown,"Sociology");
                    addOption(specializationDropdown,"Journalism and Mass Communication");
                    addOption(specializationDropdown,"Philosophy");
                    addOption(specializationDropdown,"Psychology");
                    addOption(specializationDropdown,"History");
                    addOption(specializationDropdown,"Political Science");
                    addOption(specializationDropdown,"Physical Education");
                    addOption(specializationDropdown,"Journalism");
                    addOption(specializationDropdown,"Social Work");
                    addOption(specializationDropdown,"Environmental Sciences");
                    addOption(specializationDropdown,"Fine arts");
                    addOption(specializationDropdown,"Archaeology");
                    addOption(specializationDropdown,"Anthropology");
                    addOption(specializationDropdown,"Media studies");
                    addOption(specializationDropdown,"Public administration");
                    addOption(specializationDropdown,"Law");
                    addOption(specializationDropdown,"Statistics");
                    
                    break;
                case 2:
                    addOption(specializationDropdown,"select ");
                    addOption(specializationDropdown,"Business Administration");
                    addOption(specializationDropdown,"International Business");
                    addOption(specializationDropdown,"Finance");
                    addOption(specializationDropdown,"Entrepreneurship");
                    addOption(specializationDropdown,"Hospitality");
                    addOption(specializationDropdown,"Human Resources");
                    addOption(specializationDropdown,"Global Business");
                    addOption(specializationDropdown,"Tourism");
                    addOption(specializationDropdown,"Human Resource Management");
                    addOption(specializationDropdown,"Marketing");
                    addOption(specializationDropdown,"Sports Management");
                    addOption(specializationDropdown,"Accounting");
                    addOption(specializationDropdown,"Supply Chain");
                    addOption(specializationDropdown,"Retail");
                    
                    break;
                case 3:
                    addOption(specializationDropdown,"select");
                    addOption(specializationDropdown, "Applied Economics");
                    addOption(specializationDropdown, " Marketing");
                    addOption(specializationDropdown, "Accountancy");
                    addOption(specializationDropdown, "Finance");
                    addOption(specializationDropdown, "Accounting and Finance");
                    addOption(specializationDropdown, "Banking and Finance");
                    addOption(specializationDropdown, "Banking Management");
                    addOption(specializationDropdown, "Banking and Insurance");
                    addOption(specializationDropdown, "Insurance Management");
                    addOption(specializationDropdown, "Tourism and Travel Management");
                    addOption(specializationDropdown, "Business Economics");
                    addOption(specializationDropdown, "Corporate Secretaryship");
                    addOption(specializationDropdown, "E-Commerce");
                    addOption(specializationDropdown, "Financial Markets");
                    addOption(specializationDropdown, "Financial Accounting");
                    addOption(specializationDropdown, "Foreign Trade Management");
                    addOption(specializationDropdown, "Management Studies");
                    addOption(specializationDropdown, "Supply Chain Management");
                    addOption(specializationDropdown, "Taxation");
                    

                    break;
                case 4:
                    addOption(specializationDropdown,"select");
                    addOption(specializationDropdown, "Web Development");
                    addOption(specializationDropdown, "Database Management Systems");
                    addOption(specializationDropdown, "Networking");
                    addOption(specializationDropdown, "Software Engineering");
                    addOption(specializationDropdown, "Data Science and Analytics");
                    addOption(specializationDropdown, "Mobile App Development");
                    addOption(specializationDropdown, "Cybersecurity");
                    addOption(specializationDropdown, "Artificial Intelligence and Machine Learning");
                    addOption(specializationDropdown, "Cloud Computing");

                  
                    break;
                case 5:
                    addOption(specializationDropdown,"select ");
                    addOption(specializationDropdown, "Oral and Maxillofacial Surgery");
                    addOption(specializationDropdown, "Orthodontics");
                    addOption(specializationDropdown, "Periodontics");
                    addOption(specializationDropdown, "Endodontist");
                    addOption(specializationDropdown, "Prosthodontist");
                    addOption(specializationDropdown, "Oral and Maxillofacial Radiologist");
                    addOption(specializationDropdown, " Dentist Anesthesiologists");
                    addOption(specializationDropdown, "Oral and Maxillofacial Pathologist");
                    addOption(specializationDropdown, "Orofacial Pain (OFP)");
                    addOption(specializationDropdown, "Oral Medicine");
                    addOption(specializationDropdown, "Dental Public Health (DPH)");
                    break;
                case 6:
                    addOption(specializationDropdown,"select ");
                    addOption(specializationDropdown, "English Education");
                    addOption(specializationDropdown, "Mathematics Education");
                    addOption(specializationDropdown, "Science Education (Physics, Chemistry, Biology)");
                    addOption(specializationDropdown, "Social Studies Education (History, Geography, Civics)");
                    addOption(specializationDropdown, "Computer Science Education");
                    addOption(specializationDropdown, "Physical Education");
                    addOption(specializationDropdown, "Special Education");
                    addOption(specializationDropdown, "Educational Technology");
                    addOption(specializationDropdown, "Environmental Education");
                    addOption(specializationDropdown, "Hindi Education");
                    addOption(specializationDropdown, "Sanskrit Education");
                    addOption(specializationDropdown, "Fine Arts Education");
                    addOption(specializationDropdown, "Drama and Theatre Education");
                    addOption(specializationDropdown, "Music Education");
                    addOption(specializationDropdown, "Commerce Education");

                    break;
                case 7:
                    addOption(specializationDropdown,"select ");
                    addOption(specializationDropdown, "Civil Engineering");
                    addOption(specializationDropdown, "Mechanical Engineering");
                    addOption(specializationDropdown, "Electrical Engineering");
                    addOption(specializationDropdown, "Electronics and Communication Engineering");
                    addOption(specializationDropdown, "Computer Science and Engineering");
                    addOption(specializationDropdown, "Information Technology");
                    addOption(specializationDropdown, "Chemical Engineering");
                    addOption(specializationDropdown, "Aeronautical Engineering");
                    addOption(specializationDropdown, "Biotechnology");
                    addOption(specializationDropdown, "Automobile Engineering");
                    addOption(specializationDropdown, "Instrumentation Engineering");
                    addOption(specializationDropdown, "Mining Engineering");
                    addOption(specializationDropdown, "Petroleum Engineering");
                    addOption(specializationDropdown, "Metallurgical Engineering");
                    addOption(specializationDropdown, "Textile Engineering");
                    addOption(specializationDropdown, "Environmental Engineering");
                    addOption(specializationDropdown, "Biochemical Engineering");
                    addOption(specializationDropdown, "Marine Engineering");
                    addOption(specializationDropdown, "Naval Architecture");
                    addOption(specializationDropdown, "Robotics Engineering");
                    addOption(specializationDropdown, "Nuclear Engineering");
                    addOption(specializationDropdown, "Agricultural Engineering");
                    addOption(specializationDropdown, "Food Technology");
                    addOption(specializationDropdown, "Ceramic Engineering");
                    addOption(specializationDropdown, "Power Engineering");
                    addOption(specializationDropdown, "Structural Engineering");
                    addOption(specializationDropdown, "Telecommunication Engineering");
                    addOption(specializationDropdown, "Electrical and Electronics Engineering");
                    addOption(specializationDropdown, "Computer Science and Information Technology");
                    addOption(specializationDropdown, "Artificial Intelligence and Machine Learning (AI/ML)");

                    break;
                case 8:
                    addOption(specializationDropdown,"select ");
                    addOption(specializationDropdown, "Painting");
                    addOption(specializationDropdown, "Sculpture");
                    addOption(specializationDropdown, "Printmaking");
                    addOption(specializationDropdown, "Applied Arts");
                    addOption(specializationDropdown, "Visual Communication");
                    addOption(specializationDropdown, "Photography");
                    addOption(specializationDropdown, "Ceramics");
                    addOption(specializationDropdown, "Textile Arts");
                    addOption(specializationDropdown, "Graphic Design");
                    addOption(specializationDropdown, "Illustration");
                    addOption(specializationDropdown, "Animation");
                    addOption(specializationDropdown, "Film Making");
                    addOption(specializationDropdown, "Digital Arts");
                    addOption(specializationDropdown, "Art History");
                    addOption(specializationDropdown, "Art Education");
                    addOption(specializationDropdown, "Curatorial Studies");
                    addOption(specializationDropdown, "Installation Art");
                    addOption(specializationDropdown, "Performance Art");
                    addOption(specializationDropdown, "Conceptual Art");
                    addOption(specializationDropdown, "Multimedia Arts");

                    break;
                case 9:
                    addOption(specializationDropdown,"select ");
                    addOption(specializationDropdown, "Criminal Law");
                    addOption(specializationDropdown, "Civil Law");
                    addOption(specializationDropdown, "Constitutional Law");
                    addOption(specializationDropdown, "Corporate Law");
                    addOption(specializationDropdown, "Intellectual Property Law");
                    addOption(specializationDropdown, "International Law");
                    addOption(specializationDropdown, "Labour and Employment Law");
                    addOption(specializationDropdown, "Environmental Law");
                    addOption(specializationDropdown, "Taxation Law");
                    addOption(specializationDropdown, "Human Rights Law");
                    addOption(specializationDropdown, "Family Law");
                    addOption(specializationDropdown, "Cyber Law");
                    addOption(specializationDropdown, "Media and Entertainment Law");
                    addOption(specializationDropdown, "Medical Law");
                    addOption(specializationDropdown, "Property Law");
                    addOption(specializationDropdown, "Administrative Law");
                    addOption(specializationDropdown, "Commercial Law");
                    addOption(specializationDropdown, "Banking and Finance Law");
                    addOption(specializationDropdown, "Insurance Law");
                    addOption(specializationDropdown, "Alternative Dispute Resolution (ADR)");
                    addOption(specializationDropdown, "Energy Law");
                    addOption(specializationDropdown, "Competition Law");
                    addOption(specializationDropdown, "Real Estate Law");
                    addOption(specializationDropdown, "Sports Law");
                    addOption(specializationDropdown, "Maritime Law");
                    addOption(specializationDropdown, "Aviation Law");
                    addOption(specializationDropdown, "Disability Law");
                    addOption(specializationDropdown, "Child Rights Law");
                    break;
                case 10:
                    addOption(specializationDropdown,"select ");
                    addOption(specializationDropdown, "Journalism (Print/TV/Radio)");
                    addOption(specializationDropdown, "Advertising");
                    addOption(specializationDropdown, "Public Relations");
                    addOption(specializationDropdown, "Digital Media");
                    addOption(specializationDropdown, "Broadcast Journalism");
                    addOption(specializationDropdown, "Film Making");
                    addOption(specializationDropdown, "Photography");
                    addOption(specializationDropdown, "Event Management");
                    addOption(specializationDropdown, "Media Management");
                    addOption(specializationDropdown, "Corporate Communication");
                    addOption(specializationDropdown, "Social Media Management");
                    addOption(specializationDropdown, "Content Writing and Editing");
                    addOption(specializationDropdown, "Media Research");
                    addOption(specializationDropdown, "Political Communication");
                    addOption(specializationDropdown, "Sports Journalism");
                    addOption(specializationDropdown, "Entertainment Journalism");
                    addOption(specializationDropdown, "Environmental Communication");
                    addOption(specializationDropdown, "Health Communication");
                    addOption(specializationDropdown, "Crisis Communication");
                    addOption(specializationDropdown, "International Communication");
                    break;
                case 11:
                    addOption(specializationDropdown, "None available");
                    break;
                case 12:
                    addOption(specializationDropdown,"select ");
                    addOption(specializationDropdown, "Medical-Surgical Nursing");
                    addOption(specializationDropdown, "Pediatric Nursing");
                    addOption(specializationDropdown, "Obstetric and Gynecological Nursing");
                    addOption(specializationDropdown, "Psychiatric Nursing");
                    addOption(specializationDropdown, "Community Health Nursing");
                    addOption(specializationDropdown, "Critical Care Nursing");
                    addOption(specializationDropdown, "Cardiovascular Nursing");
                    addOption(specializationDropdown, "Orthopedic Nursing");
                    addOption(specializationDropdown, "Oncology Nursing");
                    addOption(specializationDropdown, "Geriatric Nursing");
                    addOption(specializationDropdown, "Nursing Education");
                    addOption(specializationDropdown, "Nursing Administration");
                    addOption(specializationDropdown, "Public Health Nursing");
                    addOption(specializationDropdown, "Infection Control Nursing");
                    addOption(specializationDropdown, "Neonatal Nursing");
                    addOption(specializationDropdown, "Emergency Nursing");
                    addOption(specializationDropdown, "Rehabilitation Nursing");
                    addOption(specializationDropdown, "Perioperative Nursing");
                    addOption(specializationDropdown, "Nursing Informatics");
                    addOption(specializationDropdown, "Forensic Nursing");
                    break;
                case 13:
                    addOption(specializationDropdown,"select ");
                    addOption(specializationDropdown, "Pharmaceutical Chemistry");
                    addOption(specializationDropdown, "Pharmacology");
                    addOption(specializationDropdown, "Pharmaceutics");
                    addOption(specializationDropdown, "Pharmacognosy");
                    addOption(specializationDropdown, "Clinical Pharmacy");
                    addOption(specializationDropdown, "Hospital Pharmacy");
                    addOption(specializationDropdown, "Community Pharmacy");
                    addOption(specializationDropdown, "Industrial Pharmacy");
                    addOption(specializationDropdown, "Pharmaceutical Analysis");
                    addOption(specializationDropdown, "Biotechnology in Pharmacy");
                    addOption(specializationDropdown, "Regulatory Affairs in Pharmacy");
                    addOption(specializationDropdown, "Quality Assurance in Pharmaceuticals");
                    addOption(specializationDropdown, "Pharmaceutical Marketing and Management");
                    addOption(specializationDropdown, "Pharmacovigilance");
                    addOption(specializationDropdown, "Cosmeceuticals and Nutraceuticals");
                    break;
                case 14:
                    addOption(specializationDropdown,"select ");
                    addOption(specializationDropdown, "Sports Science");
                    addOption(specializationDropdown, "Sports Coaching");
                    addOption(specializationDropdown, "Physical Fitness and Conditioning");
                    addOption(specializationDropdown, "Health Education");
                    addOption(specializationDropdown, "Exercise Physiology");
                    addOption(specializationDropdown, "Sports Psychology");
                    addOption(specializationDropdown, "Sports Management");
                    addOption(specializationDropdown, "Sports Nutrition");
                    addOption(specializationDropdown, "Biomechanics");
                    addOption(specializationDropdown, "Kinesiology");
                    addOption(specializationDropdown, "Outdoor and Adventure Education");
                    addOption(specializationDropdown, "Recreation and Leisure Studies");
                    addOption(specializationDropdown, "Yoga Education");
                    addOption(specializationDropdown, "Athletic Training");
                    addOption(specializationDropdown, "Sports Medicine");
                    addOption(specializationDropdown, "Adapted Physical Education (for individuals with disabilities)");
                    addOption(specializationDropdown, "Sports Sociology");
                    addOption(specializationDropdown, "Sports Ethics");
                    addOption(specializationDropdown, "Sports Marketing and Promotion");
                    addOption(specializationDropdown, "Event Management in Sports");

                    break;
                case 15:
                    addOption(specializationDropdown,"None");
                   
                    break;
                case 16:
                    addOption(specializationDropdown,"select ");  
                    addOption(specializationDropdown, "Physics");
                    addOption(specializationDropdown, "Chemistry");
                    addOption(specializationDropdown, "Mathematics");
                    addOption(specializationDropdown, "Biology");
                    addOption(specializationDropdown, "Computer Science");
                    addOption(specializationDropdown, "Information Technology");
                    addOption(specializationDropdown, "Electronics");
                    addOption(specializationDropdown, "Statistics");
                    addOption(specializationDropdown, "Environmental Science");
                    addOption(specializationDropdown, "Geology");
                    addOption(specializationDropdown, "Zoology");
                    addOption(specializationDropdown, "Botany");
                    addOption(specializationDropdown, "Microbiology");
                    addOption(specializationDropdown, "Biotechnology");
                    addOption(specializationDropdown, "Biochemistry");
                    addOption(specializationDropdown, "Agriculture");
                    addOption(specializationDropdown, "Physics with Electronics");
                    addOption(specializationDropdown, "Physics with Computer Applications");
                    addOption(specializationDropdown, "Applied Geology");
                    addOption(specializationDropdown, "Geography");
                    addOption(specializationDropdown, "Psychology");
                   
                    
                    
                    break;
                case 17:
                    addOption(specializationDropdown,"None");
                    
                    break;
                default:
                    // Handle default case or do nothing
                    break;
            }
        }

        function addOption(selectElement, optionText) {
            var option = document.createElement("option");
            option.text = optionText;
            selectElement.add(option);
        }   


