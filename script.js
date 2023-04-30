//for resume form
//function to dynamically add education
function addEduBtn(){
	let newNode = document.createElement("textarea")
	newNode.classList.add("form-control")
	newNode.classList.add("educationText")
	newNode.classList.add("mt-1")
	newNode.setAttribute("placeholder", "Enter Other Education")
	newNode.setAttribute("rows", 2)

	let educationField = document.getElementById("educationField")
	let educationFieldBtn = document.getElementById("educationFieldBtn")
	educationField.insertBefore(newNode, educationFieldBtn)
}

//function to dynamically add work experience
function addWeBtn(){
	let newNode = document.createElement("textarea")
	newNode.classList.add("form-control")
	newNode.classList.add("workText")
	newNode.classList.add("mt-1")
	newNode.setAttribute("placeholder", "Enter Other Work Experience")
	newNode.setAttribute("rows", 2)

	let weField = document.getElementById("weField")
	let weFieldBtn = document.getElementById("weFieldBtn")
	weField.insertBefore(newNode, weFieldBtn)
}

//function to dynamically add projects
function addProjectsBtn(){
	let newNode = document.createElement("textarea")
	newNode.classList.add("form-control")
	newNode.classList.add("projectText")
	newNode.classList.add("mt-1")
	newNode.setAttribute("placeholder", "Enter Other Projects")
	newNode.setAttribute("rows", 2)

	let projectsField = document.getElementById("projectsField")
	let projectsFieldBtn = document.getElementById("projectsFieldBtn")
	projectsField.insertBefore(newNode, projectsFieldBtn)
}

//function to dynamically add technical skills
function addTSkillsBtn(){
	let newNode = document.createElement("textarea")
	newNode.classList.add("form-control")
	newNode.classList.add("TskillsText")
	newNode.classList.add("mt-1")
	newNode.setAttribute("placeholder", "Enter Other Technical Skills")
	newNode.setAttribute("rows", 2)

	let TskillsField = document.getElementById("TskillsField")
	let TskillsFieldBtn = document.getElementById("TskillsFieldBtn")
	TskillsField.insertBefore(newNode, TskillsFieldBtn)
}

//function to dynamically add soft skills
function addSSkillsBtn(){
	let newNode = document.createElement("textarea")
	newNode.classList.add("form-control")
	newNode.classList.add("SskillsText")
	newNode.classList.add("mt-1")
	newNode.setAttribute("placeholder", "Enter Other Soft Skills")
	newNode.setAttribute("rows", 2)

	let SskillsField = document.getElementById("SskillsField")
	let SskillsFieldBtn = document.getElementById("SskillsFieldBtn")
	SskillsField.insertBefore(newNode, SskillsFieldBtn)
}

//function to dynamically add awards and achievements
function addAwardsBtn(){
	let newNode = document.createElement("textarea")
	newNode.classList.add("form-control")
	newNode.classList.add("awardsText")
	newNode.classList.add("mt-1")
	newNode.setAttribute("placeholder", "Enter Other Awards and Achievements")
	newNode.setAttribute("rows", 2)

	let awardsField = document.getElementById("awardsField")
	let awardsFieldBtn = document.getElementById("awardsFieldBtn")
	awardsField.insertBefore(newNode, awardsFieldBtn)
}

//for generating the resume template
function generate(){
	let confirmMsg = confirm("Do you want to generate resume with the datas you provided?")

	if(confirmMsg){
	    //setting image using promise
		let file = document.getElementById("imgField").files[0]
		if(file){
		    let reader = new FileReader()
		    reader.readAsDataURL(file)

		    let promise = new Promise((resolve, reject) => {
		    	reader.onload = () => {
		    		resolve(reader.result)
		      	}
		        reader.onerror = () => {
		        	reject("Error occurred while reading the file.")
		        }
		    })

		    promise.then((imgSrc) => {
		    	document.getElementById("myImg").src = imgSrc
		    }).catch((error) => {
		    	console.log(error)
		    	document.getElementById("myImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYSprYSGY7wv-OyUUMHyEYhPtVO1juHDCtVg&usqp=CAU"
		    })
		}
		//setting default profile pic if no image is selected or on error
    	else{
    		document.getElementById("myImg").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYSprYSGY7wv-OyUUMHyEYhPtVO1juHDCtVg&usqp=CAU"
    	}

		//setting name
		let nameField = document.getElementById("nameField").value
		document.getElementById("uName").innerHTML = nameField

		//setting phone number
		let contactField = document.getElementById("contactField").value
		document.getElementById("uPhNumber").innerHTML = contactField

		//setting email
		let emailField = document.getElementById("emailField").value
		document.getElementById("uEmail").innerHTML = emailField

		//setting address
		let addressField = document.getElementById("addressField").value
		document.getElementById("uAddress").innerHTML = addressField

		//setting linkedin
		let linkedinField = document.getElementById("linkedinField").value
		let linkedinT = document.getElementById("linkedinT")
		linkedinT.innerHTML = "LinkedIn"
		linkedinT.href = linkedinField

		//setting github
		let githubField = document.getElementById("githubField").value
		let githubT = document.getElementById("githubT")
		githubT.innerHTML = "GitHub"
		githubT.href = githubField
		
		//setting website
		let websiteField = document.getElementById("websiteField").value
		let websiteT = document.getElementById("websiteT")
		websiteT.innerHTML = "Website"
		websiteT.href = websiteField

		//setting languages
		let languagesField = document.getElementById("languagesField").value
		document.getElementById("languagesT").innerHTML = languagesField

		//setting interests
		let interestsField = document.getElementById("interestsField").value
		document.getElementById("interestsT").innerHTML = interestsField
		
		//setting profile summary / about you
		let profileField = document.getElementById("profileField").value
		document.getElementById("profileT").innerHTML = profileField

		//setting education
	    let edu = document.getElementsByClassName("educationText")
	    let str = ""
	    for(let e of edu){
	    	str = str + `<li>${e.value}</li>`
	    }
	    document.getElementById("academicT").innerHTML = str

	    //setting work experience
	    let work = document.getElementsByClassName("workText")
	    str = ""
	    for(let e of work){
	    	str = str + `<li>${e.value}</li>`
	    }
	    document.getElementById("workT").innerHTML = str

	    //setting project
	    let project = document.getElementsByClassName("projectText")
	    str = ""
	    for(let e of project){
	    	str = str + `<li>${e.value}</li>`
	    }
	    document.getElementById("projectsT").innerHTML = str

	    //setting technical skills in skills
	    let techSkills = document.getElementsByClassName("TskillsText")
	    str = ""
	    for(let e of techSkills){
	    	let word = `<span class="bg-light text-dark border border-secondary rounded px-2 mx-1">${e.value}</span>`
	    	str = str + `${word}`
	    }
	    str = `<li>${str}</li>`
	    document.getElementById("TskillsT").innerHTML = str

	    //setting soft skills in skills
	    let softSkills = document.getElementsByClassName("SskillsText")
	    str = ""
	    for(let e of softSkills){
	    	let word = `<span class="bg-light text-dark border border-secondary rounded px-1 mx-1">${e.value}</span>`
	    	str = str + `${word}`
	    }
	    str = `<li>${str}</li>`
	    document.getElementById("SskillsT").innerHTML = str

	    //setting awards and achievements
		let awards = document.getElementsByClassName("awardsText")
	    str = ""
	    for(let e of awards){
	    	str = str + `<li>${e.value}</li>`
	    }
	    document.getElementById("awardsT").innerHTML = str

	    document.getElementById("resume-form").style.display = "none"
	    document.getElementById("resume-template").style.display = "block"
	}
}

//for downloading the resume
function downloadResume(){
	window.print()
}