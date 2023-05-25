---
title: 'Forms'
weight: 5
---

Lorem ipsum dolor sit amet, et essent mediocritatem quo, choro volumus oporteat an mei. Numquam dolores mel eu, mea docendi omittantur et, mea ea duis erat. Elit melius cu ius. Per ex novum tantas putant, ei his nullam aliquam apeirian. Aeterno quaestio constituto sea an, no eum intellegat assueverit.

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

<form>
  <label for="email-address">Email Address</label>
  <input name="email-address" id="email-address" type="email" autocomplete="username" required>
  <label for="password">Password</label>
  <input type="password" name="password" id="password" autocomplete="current-password">
  <div style="display: flex; gap: .5rem;">
    <button type="submit" value="Submit">Submit</button>
    <button data-style="secondary" type="submit" value="Submit">Clear</button>
  </div>
</form>

```
<form>
  <label for="email-address">Email Address</label>
  <input name="email-address" id="email-address" type="email" autocomplete="username" required>
  <label for="password">Password</label>
  <input type="password" name="password" id="password" autocomplete="current-password">
  <div style="display: flex; gap: .5rem;">
    <button type="submit" value="Submit">Submit</button>
    <button data-style="secondary" type="submit" value="Submit">Clear</button>
  </div>
</form>
```

<form>
  <fieldset>
    <legend>Your favourite pet</legend>
      <label for="pet-select">Choose a pet:</label>
      <select name="pets" id="pet-select">
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
      <button type="submit" value="Submit">Submit</button>
  </fieldset>
</form>

```
<form>
  <fieldset>
    <legend>Your favourite pet</legend>
      <label for="pet-select">Choose a pet:</label>
      <select name="pets" id="pet-select">
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
      <button type="submit" value="Submit">Submit</button>
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
<label>Choose a size:</label>
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
<label>
  <input type="checkbox" name="checkbox" id="checkbox">
  I agree to the <a href="#">terms and conditions</a>.
</label> 
```