 const form = document.querySelector('form');
 const emailInput = document.getElementById('email');
 const senhaInput = document.getElementById('senha');
 form.addEventListener('submit', (event) => {
     event.preventDefault();
     const email = emailInput.value;
    const senha = senhaInput.value;
    console.log(`Email: ${email}`);
    
 })