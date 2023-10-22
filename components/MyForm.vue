<template>
  <div>
    <div class="contact-form-container">
      <form id="form" class="contact-form">
        <div class="input-container">
          <div class="input-unit">
            <input
              id="name"
              placeholder="service-name"
              type="text"
              class="input-contact-info"
              autocomplete="name"
              required
            />
            <p></p>
          </div>
          <div class="input-unit">
            <input
              id="email"
              placeholder="business-name"
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
              placeholder="service-rating"
              type="email"
              class="input-contact-info"
              autocomplete="email"
              required
            />
            <p></p>
          </div>
        </div>

        <input type="submit" value="Submit" class="submit-btn" />
      </form>
    </div>
  </div>
</template>

<style>
div {
  color: red;
}
</style>
