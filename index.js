const themeSelector = document.getElementById('themeSelector');
themeSelector.addEventListener('change', (e) => {
    // console.log(e.target.value);
    localStorage.setItem('theme', e.target.value);
    changeTheme(e.target.value);
})

const theme = localStorage.getItem('theme');
changeTheme(theme);

function changeTheme(theme){
    if (theme === 'dark') {
        document.body.style.backgroundColor = "#000";
    }
    else if (theme === 'light') {
        document.body.style.backgroundColor = "gray"
    }
    else {
        document.body.style.backgroundColor = "#fff";
    }
}

window.addEventListener('storage', (e) => {
    // console.log(e);
    if (e.key === 'theme') {
        changeTheme(e.newValue);
        themeSelector.value = e.newValue;
    }
})