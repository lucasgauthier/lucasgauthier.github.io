// This file is used only for dev purposes

if (!location.hostname) {
  const links_home = document.getElementsByClassName("link_home");
  if (links_home.length > 0) {
    for (let i = 0; i < links_home.length; i++) {
      links_home.item(i).href = "index.html";
    }
  }

  const links_about = document.getElementsByClassName("link_about");
  if (links_about.length > 0) {
    for (let i = 0; i < links_about.length; i++) {
      links_about.item(i).href = "about.html";
    }
  }

  const links_projects = document.getElementsByClassName("link_projects");
  if (links_projects.length > 0) {
    for (let i = 0; i < links_projects.length; i++) {
      links_projects.item(i).href = "projects.html";
    }
  }

  const links_contact = document.getElementsByClassName("link_contact");
  if (links_contact.length > 0) {
    for (let i = 0; i < links_contact.length; i++) {
      links_contact.item(i).href = "contact.html";
    }
  }
}
