
//Projects
const projects = [
    {
        'title': 'Vue Assignment',
        'description':'Using Vue JS to Change Images Upon Hover',
        'url': './guessthatpokemon.html'
    },
    
    {
        'title': 'Form Assignment',
        'description':'Using Javascript and HTML To Send Data',
        'url': './form-example.html'
    }
]


const projectdiv = document.getElementById('project-list');
projectdiv.innerHTML = projectsListBuild();

function projectsListBuild()
{
//    using maps to generate project buttons
    const projectList = projects.map(project => 
    {
        return `<div class="item">
            <dt>
                <strong>${project.title}</strong>
            </dt>
            <dd>
                ${project.description}
            </dd>
            <dd>
                Url: <a href="${project.url}" target="_blank">${project.url}</a>
            </dd>
        </div> `
        
    })
    
    return `
        <dl class="projects">
        ${projectList.join('')}
        </dl>`; 
                                    
                                    
}