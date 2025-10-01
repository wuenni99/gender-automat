// Originaltexte automatisch einlesen
const originalTexts = {};

document.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll("p[id^='text']");
  texts.forEach(p => {
    originalTexts[p.id] = p.textContent;
  });
});

const rules = [
  { from: /\bMitarbeiter\b/g, to: "Mitarbeiter:innen" },
  { from: /\bIngenieur\b/g, to: "Ingenieur:innen" },     
  { from: /\bLehrer\b/g, to: "Lehrkräfte" },             
  { from: /\bSchülern\b/g, to: "Lernenden" },            
  { from: /\bEntwickler\b/g, to: "Entwickler:innen" },   
  { from: /\bAdministrator\b/g, to: "Administrator:innen" }, 
  { from: /\bKollegen\b/g, to: "Kolleg:innen" },         
  { from: /\bKunden\b/g, to: "Kund:innen" }              
];

// Text gendern
function genderText(id) {
  const el = document.getElementById(id);
  let text = originalTexts[id];
  rules.forEach(rule => {
    text = text.replace(rule.from, rule.to);
  });
  el.textContent = text;
}

// Text zurücksetzen
function resetText(id) {
  const el = document.getElementById(id);
  el.textContent = originalTexts[id];
}