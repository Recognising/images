function addwindow() {
    document.removeEventListener("click", addwindow, null)
    let boux = new WinBox({
        title: window.location.host,
        html: '<link rel="stylesheet" href="assets/index.css"><div id="text"><h1>[pooython@host ~]# █</h1><h3 style="color: #9cecfc;" onclick=window.open("https://github.com/q3h/images/")>Github</h3><h3 style="color: #9cecfc;" onclick=window.open("https://vuln.cf/cfg")>Config</h3><h3 style="color: #9cecfc;" onclick=window.open("https://raw.githubusercontent.com/q3h/images/main/domains")>Domains</h3></div>'
    })
}

document.addEventListener("click", addwindow, null)
