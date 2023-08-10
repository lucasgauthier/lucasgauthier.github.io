// This file is used only for dev purposes

const links_home = document.getElementsByClassName("link_home");
const links_contact = document.getElementsByClassName("link_contact");

if (!location.hostname) {
  if (links_home.length > 0) {
    for (let i = 0; i < links_home.length; i++) {
      links_home.item(i).href = "index.html";
    }
  }
  if (links_contact.length > 0) {
    for (let i = 0; i < links_contact.length; i++) {
      links_contact.item(i).href = "contact.html";
    }
  }
}
