# CSC 317 Assignment 2 Submission
**Name:** Adrian Aquino  
**Student ID:** 921649102  
**GitHub Username:** ianaqui  
**Assignment Number:** 2

## HTML Personal Portfolio Website Assignment
### Description:
I created a personal portfolio website using HTML. This portfolio website
shows who I am, what programming languages I know, my education, projects,
my extracurriculars/hobbies, and a contact section. This website includes
features such as navigation links, tables, lists, embedded maps, pictures
and videos.

## Approach / What I Did:
1. Started with basic information:
    - Added my name and picture of myself
    - Wrote a short description about myself
    - Included where I was born and raised

2. Created different sections:
    - About Me: My background and interests
    - Skills: List of programming languages I know
    - Education: My SFSU courses in a table
    - Projects: My coding projects with GitHub links
    - Extracurricular: My hobbies and current certifications
    - Contact: My email, Github, and LinkedIn links

3. Added special features:
    - Embedded OpenStreetMap of Daly City
    - Embedded Image of the SFSU logo
    - Embedded YouTube video of one of my favorite songs

## Code Explanation:
Here are the main parts of my HTML code and what each part does:

This sets up my website's title, description, and makes sure the website
is scaled to work on any device:
```html
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Personal portfolio of Adrian Aquino">
    <meta name="keywords" content="portfolio, full-stack, student">
    <meta name="author" content="Adrian Aquino">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="assets/portfoliofavicon.png">
    <title>Adrian Aquino - Portfolio</title>
</head>
```

This creates clickable links at the top to jump to different sections of my portfolio:
```html
<nav>
    <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#extracurricular">Extracurricular</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
```

This shows my project that when clicked links to GitHub and includes
a description of what the project:
```html
<section id="projects">
    <h2>Projects</h2>
    <div class="projects-container">
        <article>
            <h3><a href="https://github.com/ianaqui/Cache-Manager">Cache Manager</a></h3>
            <p>A high-performance C++ cache manager that combines a doubly linked list for LRU eviction,
                a hashmap for O(1) lookups, and a binary search tree for ordered indexing.</p>
        </article>
    </div>
</section>
```

This is my education section with a table showing relevant courses I have taken.
This section includes a table that shows the course taken as well as the semester it was taken
```html
<section id="education">
    <h2>Education</h2>
    <img src="assets/sfsulogo.png" alt="SFSU Logo" width="150">
    <p>
        San Francisco State University <br>
        Expected Graduation: Dec 2026
    </p>
    <h3>Relevant Courses Taken</h3>
    <table>
        <tr>
            <th>Course</th>
            <th>Semester</th>
        </tr>
        <tr>
            <td>Data Structures</td>
            <td>Fall 2024</td>
        </tr>
        <tr>
            <td>Discrete Math</td>
            <td>Fall 2024</td>
        </tr>
    </table>
</section>
```

This adds an interactive map showing where I was raised
```html
<iframe
    width="425"
    height="350"
    src="https://www.openstreetmap.org/export/embed.html?bbox=-122.52038955688478%2C37.647878727904676%2C-122.40709304809572%2C37.70888081499194&amp;layer=mapnik"
    style="border: 1px solid black">
</iframe>
```
