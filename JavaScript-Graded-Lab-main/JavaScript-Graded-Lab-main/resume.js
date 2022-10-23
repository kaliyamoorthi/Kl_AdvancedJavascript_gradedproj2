// import * as fs from './fs';
// import { readFileSync } from "./fs" ;
// try {
//     const jsonString = fs.readFileSync('./Data.json');
//     const data = JSON.parse(jsonString);
//     console.log(data); 

//   } catch(err) { 
//     console.log(err)
      
//   }
  // import data from './Data.json' assert { type: 'JSON' };
  // const resumes={};
  // fetch('./Data.json')
  //   .then((response) => response.json())
  //   .then((json) => {
  //       // console.log(json)
  //       resumes=json;
  //       // console.log("resumes1:"+resumes1);
        
  //      }
  //    );
  import resumes from "./data.json" assert { type: "json" };
  // console.log(resumes);
  // const resumes= {
  //   "resume" : 
  //   [ 
  //     {
  //       "id":1,
  //       "basics": 
  //       {
  //         "name": "John Doe",
  //         "AppliedFor": "Software Engineer",
  //         "image": "",
  //         "email": "john@gmail.com",
  //         "phone": "9999999999",
  //         "location": 
  //         {
  //           "address": "2712 Broadway St",
  //           "postalCode": "560063",
  //           "city": "Bangalore",
  //           "state": "Karnataka"
  //         },
  //         "profiles":
  //         {
  //           "network": "LinkedIn",
  //           "url": "https://linkedin.com/john"
  //         }
  //       },
        
  //       "skills": 
  //       {
  //         "name": "Web Development",
  //         "level": "Master",
  //         "keywords": 
  //         [
  //           "HTML",
  //           "CSS",
  //           "JavaScript",
  //           "Python"
  //         ]
  //       },
        
  //       "work": 
  //       {
  //         "Company Name": "Harman",
  //         "Position": "Associate Engineer",
  //         "Start Date": "2013-01-01",
  //         "End Date": "2014-01-01",
  //         "Summary": "Associate engineer with development, testing verification and validation experience on Car UI display systems.Performed phone projection development of user stories and testing with infotainment system such as Android auto ,Car playAnalyzed requirements , created test plans, executed test cases for connectivity epic such as C-connect, F-connect.Good at analyzing DLT logs and analyzing the code refactor areas."
  //       },
          
  //       "Internship":
  //       {
  //         "Company Name": "Ibm",
  //         "Position": "intern",
  //         "Start Date": "2013-01-01",
  //         "End Date": "2014-01-01",
  //         "Summary": " Learned about Tools used for website testing such as Deep Trawl, NVDA, web developer extension, OpenVAS,Learned about the importance and concept of OWASP.Learned React JS and worked for Frontend development with professional."
      
  //       },
          
  //       "projects":
  //       {
  //         "name": "Diabetic Retinopaty",
  //         "description": " created a GUI using QT designer which will take image of retina as input, input image will be processed and compare with the images present in database and then classified as one of DR stage or normal.OpenCV and image processing concepts are used. survey paper on this project is publish in 2nd international conference on Topical Transcend in Science, Technology & Management."
  //       },
        
  //       "education": 
  //       {
  //         "UG": 
  //         {
  //           "institute": "Sai Vidya Institute of Technology",
  //           "course": "B.E Computer Science and Engineering",
  //           "Start Date": "2011-01-01",
  //           "End Date": "2013-01-01",
  //           "cgpa":"8.7"
  //         },	
  //         "Senior Secondary" : 
  //         {
  //           "institute": "KV AFS YELAHANKA",
  //           "cgpa":"8.7"
  //         },
  //         "High School" : 
  //         {
  //           "institute": "KV AFS Bhuj",
  //           "cgpa":"8.7"
  //         }	
  //       },
  //       "achievements": 
  //       {
  //         "Summary" : ["Attended 5 days industry orientation workshop organized by free software movement"]
  //       },
  //       "interests": 
  //       {
  //         "hobbies": ["Wildlife","Dance","Workout"]
  //       }
  //     },
  //     {
  //       "id":2,
  //       "basics": 
  //       {
  //         "name": "Riya",
  //         "AppliedFor": "Software Engineer",
  //         "image": "",
  //         "email": "riya@gmail.com",
  //         "phone": "9999999999",
  //         "location": 
  //         {
  //           "address": "12 maruthi nilaya ",
  //           "postalCode": "560063",
  //           "city": "Bangalore",
  //           "state": "Karnataka"
  //         },
  //         "profiles":
  //         {
  //           "network": "LinkedIn",
  //           "url": "https://linkedin.com/riya"
  //         }
  //       },
        
  //       "skills": 
  //       {
  //         "name": "AIML",
  //         "level": "intermediate",
  //         "keywords": 
  //         [
  //           "python",
  //           "ML",
  //           "AI",
  //           "Image Processing"
  //         ]
  //       },
        
  //       "work": 
  //       {
  //         "Company Name": "IBM",
  //         "Position": "Software Engineer",
  //         "Start Date": "2020-01-01",
  //         "End Date": "2022-01-01",
  //         "Summary": "Associate engineer with development, testing verification and validation experience on Car UI display systems.Performed phone projection development of user stories and testing with infotainment system such as Android auto ,Car playAnalyzed requirements , created test plans, executed test cases for connectivity epic such as C-connect, F-connect.Good at analyzing DLT logs and analyzing the code refactor areas."
  //       },
          
  //       "Internship":
  //       {
  //         "Company Name": "Ibm",
  //         "Position": "intern",
  //         "Start Date": "2019-01-01",
  //         "End Date": "2020-01-01",
  //         "Summary": " Learned about Tools used for website testing such as Deep Trawl, NVDA, web developer extension, OpenVAS,Learned about the importance and concept of OWASP.Learned React JS and worked for Frontend development with professional."
      
  //       },
          
  //       "projects":
  //       {
  //         "name": "Diabetic Retinopaty",
  //         "description": " created a GUI using QT designer which will take image of retina as input, input image will be processed and compare with the images present in database and then classified as one of DR stage or normal.OpenCV and image processing concepts are used. survey paper on this project is publish in 2nd international conference on Topical Transcend in Science, Technology & Management."
  //       },
        
  //       "education": 
  //       {
  //         "UG": 
  //         {
  //           "institute": "Nagarujana Institute of Technology",
  //           "course": "B.E Computer Science and Engineering",
  //           "Start Date": "2010-01-01",
  //           "End Date": "2015-01-01",
  //           "cgpa":"9.7"
  //         },	
  //         "Senior Secondary" : 
  //         {
  //           "institute": "Reva Institute",
  //           "cgpa":"8.7"
  //         },
          
  //         "High School" : 
  //         {
  //           "institute": "Ryan public school",
  //           "cgpa":"10.0"
  //         }	
  //       },
  //       "achievements": 
  //       {
  //         "dums" : "",
  //         "Summary" : [
  //           "Attended 5 days industry orientation workshop organized by free software movement",
  //           "Participated in google hackathon"
  //         ]
  //       },
  //       "interests": 
  //       {
  //         "hobbies": ["Wildlife","Dance","Workout","Reading books"]
  //       }
  //     },
  //     {
  //       "id":3,
  //       "basics": 
  //       {
  //         "name": "Rahul Roy",
  //         "AppliedFor": "Manager",
  //         "image": "",
  //         "email": "roy@gmail.com",
  //         "phone": "9999999999",
  //         "location": 
  //         {
  //           "address": " 305 A-Richard apartments ",
  //           "postalCode": "560054",
  //           "city": "Ahemdabad",
  //           "state": "Gujarat"
  //         },
  //         "profiles":
  //         {
  //           "network": "LinkedIn",
  //           "url": "https://linkedin.com/rahulroy"
  //         }
  //       },
        
  //       "skills": 
  //       {
  //         "name": "FullStack",
  //         "level": "Master",
  //         "keywords": 
  //         [
  //           "HTML",
  //           "CSS",
  //           "JavaScript",
  //           "React",
  //           "Java"
  //         ]
  //       },
        
  //       "work": 
  //       {
  //         "Company Name": "Great Learning",
  //         "Position": "Manager",
  //         "Start Date": "2015-01-01",
  //         "End Date": "2020-01-01",
  //         "Summary": "Associate engineer with development, testing verification and validation experience on Car UI display systems.Performed phone projection development of user stories and testing with infotainment system such as Android auto ,Car playAnalyzed requirements , created test plans, executed test cases for connectivity epic such as C-connect, F-connect.Good at analyzing DLT logs and analyzing the code refactor areas."
  //       },
          
  //       "Internship":
  //       {
  //         "Company Name": "TCS",
  //         "Position": "intern",
  //         "Start Date": "2013-01-01",
  //         "End Date": "2014-01-01",
  //         "Summary": " Learned about Tools used for website testing such as Deep Trawl, NVDA, web developer extension, OpenVAS,Learned about the importance and concept of OWASP.Learned React JS and worked for Frontend development with professional."
      
  //       },
          
  //       "projects":
  //       {
  //         "name": "E-Commerce Website",
  //         "description": " I have created a ecommerce website using html,css,and react with javascripts, Porject has functionality where user can select any item of their choice and store it into a cart or they add item into their whishlist, seraching functionality allow user to search any product by name ."
  //       },
        
  //       "education": 
  //       {
  //         "UG": 
  //         {
  //           "institute": "BMS Institute of Technology",
  //           "course": "B.E Information Science and Engineering",
  //           "Start Date": "2008-01-01",
  //           "End Date": "2011-01-01",
  //           "cgpa":"8.7"
  //         },	
  //         "Senior Secondary" : 
  //         {
  //           "institute": "Delhi Public School",
  //           "cgpa":"9.0"
  //         },
          
  //         "High School" : 
  //         {
  //           "institute": "Delhi Public School",
  //           "cgpa":"9.6"
  //         }	
  //       },
  //       "achievements": 
  //       {
  //         "Summary" : ["Attended a workshop on fullstack development", "participated in state level baskteball"]
  //       },
  //       "interests": 
  //       {
  //         "hobbies": ["Wildlife","Travelling","Workout"]
  //       }
  //     },
  //     {
  //       "id":4,
  //       "basics": 
  //       {
  //         "name": "Priya Desai",
  //         "AppliedFor": "HR",
  //         "image": "",
  //         "email": "Priya@gmail.com",
  //         "phone": "9999999999",
  //         "location": 
  //         {
  //           "address": " 201 A-Niteshapartments ",
  //           "postalCode": "560054",
  //           "city": "Bikaner",
  //           "state": "Rajasthan"
  //         },
  //         "profiles":
  //         {
  //           "network": "LinkedIn",
  //           "url": "https://linkedin.com/PriyaDesai"
  //         }
  //       },
        
  //       "skills": 
  //       {
  //         "name": "HR Management",
  //         "level": "Master",
  //         "keywords": 
  //         [
  //           "Excel",
  //           "Data Management",
  //           "Communication skill"
  
  //         ]
  //       },
        
  //       "work": 
  //       {
  //         "Company Name": "Cerner private lmtd.",
  //         "Position": "HR",
  //         "Start Date": "2015-01-01",
  //         "End Date": "2020-01-01",
  //         "Summary": "Involve in various communication activites with client, Handling data for all employees"
  //       },
          
  //       "Internship":
  //       {
  //         "Company Name": "TCS",
  //         "Position": "intern",
  //         "Start Date": "2013-01-01",
  //         "End Date": "2014-01-01",
  //         "Summary": "Source potential candidates from various online channels,Craft recruiting emails to attract passive candidates,Screen incoming resumes and application forms "
  //       },
          
  //       "projects":
  //       {
  //         "name": "Efficiency Design of Solar Panels",
  //         "description": "This project aims to design the solar panel cells with higer energy consumption in all types of weathers and also helps in absorbing higher energy."
  //       },
        
  //       "education": 
  //       {
  //         "UG": 
  //         {
  //           "institute": "BMS Institute of Technology",
  //           "course": "MCA",
  //           "Start Date": "2008-01-01",
  //           "End Date": "2011-01-01",
  //           "cgpa":"8.7"
  //         },	
  //         "Senior Secondary" : 
  //         {
  //           "institute": "Delhi Public School",
  //           "cgpa":"9.0"
  //         },
          
  //         "High School" : 
  //         {
  //           "institute": "Delhi Public School",
  //           "cgpa":"9.6"
  //         }	
  //       },
  //       "achievements": 
  //       {
  //         "Summary" : ["Been complimented by your supervisor or co-workers","Increased revenue or sales for the company"]
  //       },
  //       "interests": 
  //       {
  //         "hobbies": ["Art&Craft","Travelling","Workout"]
  //       }
  //     },
  //     {
  //       "id":5,
  //       "basics": 
  //       {
  //         "name": "Rakesh Ranjan",
  //         "AppliedFor": "Manager",
  //         "image": "",
  //         "email": "Priya@gmail.com",
  //         "phone": "9999999999",
  //         "location": 
  //         {
  //           "address": " 201 A-Niteshapartments ",
  //           "postalCode": "560054",
  //           "city": "Bikaner",
  //           "state": "Rajasthan"
  //         },
  //         "profiles":
  //         {
  //           "network": "LinkedIn",
  //           "url": "https://linkedin.com/PriyaDesai"
  //         }
  //       },
        
  //       "skills": 
  //       {
  //         "name": "HR Management",
  //         "level": "Master",
  //         "keywords": 
  //         [
  //           "Excel",
  //           "Data Management",
  //           "Communication skill"
  
  //         ]
  //       },
        
  //       "work": 
  //       {
  //         "Company Name": "Cerner private lmtd.",
  //         "Position": "HR",
  //         "Start Date": "2015-01-01",
  //         "End Date": "2020-01-01",
  //         "Summary": "Involve in various communication activites with client, Handling data for all employees"
  //       },
          
  //       "Internship":
  //       {
  //         "Company Name": "TCS",
  //         "Position": "intern",
  //         "Start Date": "2013-01-01",
  //         "End Date": "2014-01-01",
  //         "Summary": "Source potential candidates from various online channels,Craft recruiting emails to attract passive candidates,Screen incoming resumes and application forms "
  //       },
          
  //       "projects":
  //       {
  //         "name": "Efficiency Design of Solar Panels",
  //         "description": "This project aims to design the solar panel cells with higer energy consumption in all types of weathers and also helps in absorbing higher energy."
  //       },
        
  //       "education": 
  //       {
  //         "UG": 
  //         {
  //           "institute": "BMS Institute of Technology",
  //           "course": "MCA",
  //           "Start Date": "2008-01-01",
  //           "End Date": "2011-01-01",
  //           "cgpa":"8.7"
  //         },	
  //         "Senior Secondary" : 
  //         {
  //           "institute": "Delhi Public School",
  //           "cgpa":"9.0"
  //         },
          
  //         "High School" : 
  //         {
  //           "institute": "Delhi Public School",
  //           "cgpa":"9.6"
  //         }	
  //       },
  //       "achievements": 
  //       {
  //         "Summary" : ["Best employee of the year 2021","Increased revenue or sales for the company in 2019"]
  //       },
  //       "interests": 
  //       {
  //         "hobbies": ["Art&Craft","Travelling","Workout"]
  //       }
  //     },
  //     {
  //       "id":6,
  //       "basics": 
  //       {
  //         "name": "Godse",
  //         "AppliedFor": "Manager",
  //         "image": "",
  //         "email": "Priya@gmail.com",
  //         "phone": "9999999999",
  //         "location": 
  //         {
  //           "address": " 201 A-Niteshapartments ",
  //           "postalCode": "560054",
  //           "city": "Bikaner",
  //           "state": "Rajasthan"
  //         },
  //         "profiles":
  //         {
  //           "network": "LinkedIn",
  //           "url": "https://linkedin.com/PriyaDesai"
  //         }
  //       },
        
  //       "skills": 
  //       {
  //         "name": "HR Management",
  //         "level": "Master",
  //         "keywords": 
  //         [
  //           "Excel",
  //           "Data Management",
  //           "Communication skill"
  
  //         ]
  //       },
        
  //       "work": 
  //       {
  //         "Company Name": "Cerner private lmtd.",
  //         "Position": "HR",
  //         "Start Date": "2015-01-01",
  //         "End Date": "2020-01-01",
  //         "Summary": "Involve in various communication activites with client, Handling data for all employees"
  //       },
          
  //       "Internship":
  //       {
  //         "Company Name": "TCS",
  //         "Position": "intern",
  //         "Start Date": "2013-01-01",
  //         "End Date": "2014-01-01",
  //         "Summary": "Source potential candidates from various online channels,Craft recruiting emails to attract passive candidates,Screen incoming resumes and application forms "
  //       },
          
  //       "projects":
  //       {
  //         "name": "Efficiency Design of Solar Panels",
  //         "description": "This project aims to design the solar panel cells with higer energy consumption in all types of weathers and also helps in absorbing higher energy."
  //       },
        
  //       "education": 
  //       {
  //         "UG": 
  //         {
  //           "institute": "BMS Institute of Technology",
  //           "course": "MCA",
  //           "Start Date": "2008-01-01",
  //           "End Date": "2011-01-01",
  //           "cgpa":"8.7"
  //         },	
  //         "Senior Secondary" : 
  //         {
  //           "institute": "Delhi Public School",
  //           "cgpa":"9.0"
  //         },
          
  //         "High School" : 
  //         {
  //           "institute": "Delhi Public School",
  //           "cgpa":"9.6"
  //         }	
  //       },
  //       "achievements": 
  //       {
  //         "Summary" : [
  //           "Been complimented by your supervisor or co-workers",
  //           "Increased revenue or sales for the company"
  //         ]
  //       },
  //       "interests": 
  //       {
  //         "hobbies": ["Art&Craft","Travelling","Workout"]
  //       }
  //     }
  //   ]		 
  // }
  var isFiltered=false;
  const searchEl = document.getElementById("searchEl");
  searchEl.addEventListener("keypress",function(e){
     isFiltered=false;
     if(e.key==='Enter'){
        filter(searchEl.value);
     }
  })
  // console.log(key);
  var i =0;
  var size = resumes.resume.length-1;
  var array=[];
 
  function filter(key){
    console.log("key:"+key);
    array=[];
    resumes.resume.forEach( candidate =>{
      if(candidate.basics.AppliedFor===key){
        array.push(candidate.id-1);
      }
    });  
    const notFound= document.getElementsByClassName("notFound");
    const outC= document.getElementsByClassName("out_container");
    const nfp = document.getElementById("nfPara");
    const img = document.getElementById("img");
    if (array.length===0 && key!=""){
      notFound[0].style.visibility="visible";
      notFound[0].style.display="flex";
      notFound[0].style.height="30%";
      notFound[0].style.width="50%";
      notFound[0].style.alignItems="center";
      notFound[0].style.marginRight= "auto";
      notFound[0].style.marginLeft= "auto";
      notFound[0].style.marginTop= "30px";
      
      notFound[0].style.border= "1pt";
      notFound[0].style.borderStyle= "solid";

      nfp.style.fontWeight="bold";   
      nfp.style.color="crimson";
      nfp.style.display="flexbox";
      nfp.style.fontSize="larger"
      // nfp.style.flex="70%";

      // imgdiv.style.display="inline";
      // img.style.height="10%";
      img.style.width="30%";
      img.style.marginRight="20px";
      // img.style.display="inline";
      
      outC[0].style.visibility="hidden";
      outC[0].style.display="none";

      prev.style.visibility='hidden';
      next.style.visibility='hidden';
    }
    else{
      if(key!=""){
        isFiltered=true;
      }
      i=0;
      size = resumes.resume.length-1;
      notFound[0].style.visibility="hidden";
      notFound[0].style.display="none";

      outC[0].style.visibility="visible";
      outC[0].style.display="block";
      updatePage(0);
    }
  }
  
  console.log(size);

  const prev=document.getElementById("prev");
  const next=document.getElementById("next");
  updatePage(0);
  
  prev.addEventListener("click",prevPage);
  next.addEventListener("click",nextPage);
  
  // if(i===0){
  //   prev.style.visibility='hidden';
  // }
  
  function prevPage(){
    i=i-1;
    updatePage(i);
  }
  function nextPage(){
    i=i+1;
    updatePage(i);
  }

  console.log(resumes);
function updatePage(i) {
  var imod =i;
  if(isFiltered){
    size=array.length-1;
    imod = array[i];
  }  
    if(i===0){
      prev.style.visibility='hidden';
      if(i===size){
        next.style.visibility='hidden';
      }
      else{
        next.style.visibility='visible';
      }
    } 
    else if(i>0 && i<size){
      prev.style.visibility='visible';
      next.style.visibility='visible';
    }
    else if(i===size){
      next.style.visibility='hidden';
      prev.style.visibility='visible';
    }
  console.log("imod:"+i);
  updateBasicDetails(imod);
  updateSkills_Hobbies(imod);
  updatePreviousCompany(imod);
  updateProject(imod);
  updateEducation(imod);
  updateIntern(imod);
  updateAchievements(imod);
}
  
  function updateBasicDetails( i ){
    console.log("in updatebasics");
    const nameEl = document.getElementById("nameId");
    const appliedFor = document.getElementById("appliedFor"); 
    const contact = document.getElementById("contact");
    const mail = document.getElementById("email");
    const profile = document.getElementById("profile");
    console.log("i in updateBasicSkills:"+i);
    nameEl.innerText = resumes.resume[i].basics.name;
    appliedFor.innerText = "Applied for: " + resumes.resume[i].basics.AppliedFor;      
    contact.innerText = resumes.resume[i].basics.phone;
    mail.innerText=resumes.resume[i].basics.email;
    profile.innerText=resumes.resume[i].basics.profiles.network;
    profile.setAttribute('href',resumes.resume[i].basics.profiles.url);
  }

  function updateSkills_Hobbies(i){
    // console.log("in skills");
    const skills = document.getElementById("listSkills");
    const hobbies = document.getElementById("listHobbies");
    // ul.appendChild(li);
    skills.innerHTML="";
    resumes.resume[i].skills.keywords.forEach(element => {
        const li = document.createElement("li");  
        li.appendChild(document.createTextNode(element));
        skills.appendChild(li); 
    });
    hobbies.innerHTML="";
    resumes.resume[i].interests.hobbies.forEach(element => {
      const li = document.createElement("li");  
      li.appendChild(document.createTextNode(element));
      hobbies.appendChild(li); 
  });  
  }

  function updatePreviousCompany(i){
    // console.log("in Previous Company");
    const company = document.getElementById("company");
    const position = document.getElementById("position");
    const startdate = document.getElementById("startdate");
    const lastdate = document.getElementById("enddate");
    const desc = document.getElementById("jobdescription");
    company.innerText=resumes.resume[i].work["Company Name"];
    position.innerText = resumes.resume[i].work.Position;
    startdate.innerText = resumes.resume[i].work["Start Date"];
    lastdate.innerText=resumes.resume[i].work["End Date"];
    desc.innerText =resumes.resume[i].work.Summary;
  }

  function updateProject(i){
    // console.log("in Project");
    const projectName = document.getElementById("projectName");
    const desc = document.getElementById("projdescription");
    projectName.innerText=resumes.resume[i].projects.name;
    desc.innerText =resumes.resume[i].projects.description;
  }
  
  function updateEducation(i){
    // console.log("in Education");
    const ug = document.getElementById("ug");
    const pu = document.getElementById("pu");
    const hs = document.getElementById("highschool");
    var ugStr="";
    var education = resumes.resume[i].education;
    ugStr = education.UG.institute+","+education.UG.course+","+education.UG["Start Date"]+","+education.UG["End Date"]+","+education.UG.cgpa;
    ug.innerText= ugStr;
    pu.innerText=education["Senior Secondary"].institute+","+education["Senior Secondary"].cgpa;
    hs.innerText=education["High School"].institute+","+education["High School"].cgpa;  
  }

  function updateIntern(i){
    // console.log("in Intern");
    const company = document.getElementById("company_in");
    const position = document.getElementById("position_in");
    const startdate = document.getElementById("startdate_in");
    const enddate = document.getElementById("enddate_in");
    const desc= document.getElementById("summary_in");
    var intern = resumes.resume[i].Internship;
    company.innerText=intern["Company Name"];
    position.innerText =intern.Position;
    startdate.innerText=intern["Start Date"];
    enddate.innerText=intern["End Date"];
    desc.innerText=intern.Summary;
  }

  function updateAchievements(i){
    // console.log("in achievements");
    const achievements = document.getElementById("achievements");
    
    // ul.appendChild(li);
    resumes.resume[i].achievements.Summary.forEach(element => {
        const li = document.createElement("li");  
        li.appendChild(document.createTextNode(element));
        achievements.appendChild(li); 
    });
 
  }