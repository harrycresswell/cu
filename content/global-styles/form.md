---
title: 'Forms'
weight: 5
---

Use the `<form>` element to contain any interative elements, used to submit information and collect data. 

<form>
  <label for="email-address">Email Address</label>
  <input name="email-address" id="email-address" type="email" autocomplete="username" required>
  <label for="password">Password</label>
  <input type="password" name="password" id="password" autocomplete="current-password">
  <button type="submit" value="Submit">Submit</button>
</form>

```
<form>
  <label for="email-address">Email Address</label>
  <input name="email-address" id="email-address" type="email" autocomplete="username" required>
  <label for="password">Password</label>
  <input type="password" name="password" id="password" autocomplete="current-password">
  <button type="submit" value="Submit">Submit</button>
</form>
```

Optionally, you can also:

- Use `<fieldset>` to group elements within the form.
- Use `<legend>` to caption the form contents. 
- Add the `w-full` [width utility class](/utilities#width) to any input, textarea or button to make it fill the width of the form.


<form>
  <fieldset>  
    <legend>Give us your feedback</legend>
    <label for="full-name">Full Name</label>
    <input class="w-full" name="full-name" id="full-name" type="text" placeholder="e.g Harry" required>
    <label for="email-address">Email Address</label>
    <input class="w-full" name="email-address" id="email-address" type="email" autocomplete="username" required>
    <label for="message">Message</label>
    <textarea class="w-full" rows="4" name="message" id="message" type="text" required></textarea>
    <button class="w-full" type="submit" value="Submit">Submit</button>
  </fieldset>
</form>

```
<form>
  <fieldset>  
    <legend>Give us your feedback</legend>
    <label for="full-name">Full Name</label>
    <input class="w-full" name="full-name" id="full-name" type="text" placeholder="e.g Harry" required>
    <label for="email-address">Email Address</label>
    <input class="w-full" name="email-address" id="email-address" type="email" autocomplete="username" required>
    <label for="message">Message</label>
    <textarea class="w-full" rows="4" name="message" id="message" type="text" required></textarea>
    <button class="w-full" type="submit" value="Submit">Submit</button>
  </fieldset>
</form>
```

Selects are also a thing:

<form>
  <fieldset>
    <legend>Your favourite character</legend>
      <label for="character-select">Choose a character:</label>
      <select name="characters" id="character-select">
        <option value="">Choose an option</option>
        <option value="luke">Luke</option>
        <option value="han">Han</option>
        <option value="leia">Leia</option>
        <option value="obi-wan">Obi-Wan</option>
        <option value="yoda">Yoda</option>
      </select>
      <button type="submit" value="Submit">Submit</button>
  </fieldset>
</form>

```
<form>
  <fieldset>
    <legend>Your favourite character</legend>
      <label for="character-select">Choose a character:</label>
      <select name="characters" id="character-select">
        <option value="">Choose an option</option>
        <option value="luke">Luke</option>
        <option value="han">Han</option>
        <option value="leia">Leia</option>
        <option value="obi-wan">Obi-Wan</option>
        <option value="yoda">Yoda</option>
      </select>
      <button type="submit" value="Submit">Submit</button>
  </fieldset>
</form>
```

As are radio buttons:

<form>
<fieldset>
<legend>Choose a size:</legend>
<label>
  <input type="radio" name="size" value="small">
  Small
</label>
<label>
  <input type="radio" name="size" value="medium">
  Medium
</label>
<label>
  <input type="radio" name="size" value="large">
  Large
</label>
</fieldset>
</form>

```
<form>
  <fieldset>
    <legend>Choose a size:</legend>
    <label>
      <input type="radio" name="size" value="small">
      Small
    </label>
    <label>
      <input type="radio" name="size" value="medium">
      Medium
    </label>
    <label>
      <input type="radio" name="size" value="large">
      Large
    </label>
  </fieldset>
</form>
```

And, checkboxes:

<form>
  <label for="email-address">Email Address</label>
  <input name="email-address" id="email-address" type="email" autocomplete="username" required>
  <label for="password">Password</label>
  <input type="password" name="password" id="password" autocomplete="current-password">
  <label>
    <input type="checkbox" name="checkbox" id="checkbox">
    I agree to the <a href="#">terms and conditions</a>.
  </label> 
  <button type="submit" value="Submit">Sign up</button>
</form>

```
<form>
  <label for="email-address">Email Address</label>
  <input name="email-address" id="email-address" type="email" autocomplete="username" required>
  <label for="password">Password</label>
  <input type="password" name="password" id="password" autocomplete="current-password">
  <label>
    <input type="checkbox" name="checkbox" id="checkbox">
    I agree to the <a href="#">terms and conditions</a>.
  </label> 
  <button type="submit" value="Submit">Sign up</button>
</form>
```