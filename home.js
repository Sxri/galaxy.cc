document.addEventListener("DOMContentLoaded", function() {
  var burger = document.querySelector('.burger');
  var popup = document.querySelector('.popup');
  const faqQuestions = document.querySelectorAll('.faq-question');

  // Open the popup box when burger icon is clicked
  burger.addEventListener('click', function() {
    popup.style.animation = 'slideIn 0.3s forwards';
    popup.style.display = 'flex';
  });

  const fetch = require("node-fetch");

module.exports = {
    name: 'product',
    description: 'gets product data',
        async execute(message, args) {
            const ID = args.slice(1).join(' ');

                const response = await fetch(
                    `https://dev.sellix.io/v1/products/${ID}`,
                    { headers: { Authorization: `Bearer wo07Hvcn0ZigT1L5k88ar2B1HnPMEHLJ9Irw42iezcDh9ksPDDJmTdSPlf7dIWnM`} }
                );

                const data = await response.json();

                let itemname = data.title;

                const embed = new Discord.MessageEmbed()
                .setTitle(`**${itemname} Info:**`)
                .setDescription(`**Name:** ${itemname}`)
                .setColor('01a852')
                .setTimestamp(new Date().getTime())

    message.channel.send(embed);
  }}

  // Close the popup box when clicking outside of it
  window.addEventListener('click', function(event) {
    if (event.target === popup) {
      popup.style.animation = 'slideOut 0.3s forwards';
      setTimeout(function() {
        popup.style.display = 'none';
      }, 300);
    }
  });
});


