import React from 'react'
// import axios from 'axios'

export default function Home() {
    const [commits, setCommits] = React.useState([]);

    React.useEffect(() => {
        const user = 'FIOpwK';
        fetch(`https://api.github.com/search/commits?q=repo:${user}/portfolio-website`)
            .then(res => console.log(res.json()))
            .then(commit => console.log(commit)).catch(err => console.error(err.message))

    }, [])

    return (
        <div>
            <h1>Dajuan Mcdonald</h1>
            <section>

                <div>
                    <h3>Skills:</h3>
                    <ul>
                        <li>
                            Web Development
                </li>
                        <li>
                            Javascript
                </li>
                        <li>
                            HTML
                </li>
                        <li>
                            CSS
                </li>
                        <li>
                            Git
                </li>
                    </ul>
                </div>

            </section>

            <section>
                <div>
                    <h3>Operating Systems</h3>
                    <ul>
                        <li>
                            Windows 10
                   </li>
                        <li>
                            Fedora Linux
                   </li>
                        <li>
                            OSX
                   </li>
                        <li>
                            Gentoo Linux
                   </li>
                        <li>
                            CentOS
                   </li>
                        <li>
                            Kali Linux
                   </li>
                        <li>
                            Debian 9
                   </li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h3>Experience</h3>
                    <h5>Gentoo Linux Foundation</h5>
                    <li>Security Project Volunteer</li>
                    <h5>Cenveo Communications</h5>
                    <li>Bindery Operator II</li>
                    <h5>WFF Services</h5>
                    <li>Technician</li>
                    <h5>Flopwiki Media</h5>
                    <li>Founder</li>
                    <li>Technical Instructor</li>
                </div>
            </section>
            <section>
                <div>
                    <h3>Hobbies</h3>
                    <li>Blogs</li>
                    <li>Coding</li>
                    <li>Teaching</li>
                    <li>Research</li>
                </div>
            </section>
        </div>
    )
}
