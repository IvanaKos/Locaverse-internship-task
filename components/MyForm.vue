<template>
  <div class="form-container">
    <form id="form" class="rating-form">
      <div class="input-unit">
        <input
          id="service-name"
          placeholder="Service-name"
          type="text"
          class="input-contact-info"
          autocomplete="name"
          required
        />
        <p></p>
      </div>
      <div class="input-unit">
        <input
          id="business-name"
          placeholder="Business-name"
          type="email"
          class="input-contact-info"
          autocomplete="email"
          required
        />
        <p></p>
      </div>
      <div class="input-unit">
        <input
          id="rating"
          placeholder="Service-rating"
          type="email"
          class="input-contact-info"
          autocomplete="email"
          required
        />
        <p></p>
      </div>

      <input type="submit" value="Submit" class="submit-btn" />
    </form>
  </div>
</template>

<style>
.form-container {
  width: 40%;
  margin-top: 100px;
}

.rating-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-unit {
  width: 100%;
}

input {
  color: hsl(198deg 39% 18%);
  border: 1px solid hsl(206deg 14% 68%);
  border-radius: 5px;
  padding: 10px;
  width: 100%;
}

input::placeholder {
  color: hsl(206deg 14% 68%);
}

input:focus {
  outline-color: hsl(195deg 63% 48%);
}

.submit-btn {
  width: 200px;
  margin-top: 50px;
  color: hsl(0deg 0% 100%);
  background-color: hsl(195deg 63% 48%);
  transition: 0.4s;
}

.submit-btn:hover {
  box-shadow: 0 0 0 1px hsl(195deg 63% 48%);
  color: hsl(195deg 63% 48%);
  background-color: hsl(0deg 0% 100%);
  transform: scale(0.97);
}
</style>
