    const form = document.getElementById('skillForm');
    const skillsList = document.getElementById('skillsList');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const offer = document.getElementById('offer').value.trim();
      const request = document.getElementById('request').value.trim();
      const details = document.getElementById('details').value.trim();

      if (!name || !email || !offer || !request) {
        alert('Please fill out all required fields.');
        return;
      }

      const card = document.createElement('div');
      card.classList.add('skill-card');
      card.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Offers:</strong> ${offer}</p>
        <p><strong>Wants:</strong> ${request}</p>
        ${details ? `<p><em>${details}</em></p>` : ''}
        <p><a href="mailto:${email}">Contact ${name}</a></p>
      `;

      skillsList.appendChild(card);

      form.reset();
    });
