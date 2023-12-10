
//Projects
const projects = [
    {
        'title': 'One Button Monster Catcher',
        'description':'Unity Pokemon-Like using One Button',
        'url': './onebuttonmonstercatcher.html'
    },
    
    {
        'title': 'One Jam',
        'description':'Unity Rhythm Game using One Button',
        'url': './onebuttonrythmgame.html'
    },
    
    {
        'title': 'Do You Mind',
        'description':'Unity Stealth Game',
        'url': './possumgame.html'
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