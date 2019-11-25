const NotLoggedInHtml = `
<div class="hero">
    <div class="ctaBox">
        <h1>Recipie Client</h1>
        <h3>Sub-Header that gives more details on what this is</h3>
        <div class='ctaButtons'>
            <button onClick="changePage(200)" class="ctaPrimary">Logins Coming Soon</button>
            <button class="ctaSecondary" onClick="changePage(300)">Continue as Guest</button>
</div></div></div>`;
const aboutPageHtml = `
<div class="about">
    <h2>About This Website</h2>
    <p>Nulla nec magna venenatis, porta massa ut, dignissim nulla. Aliquam posuere venenatis porttitor. Integer consectetur nunc vitae lorem congue, in posuere dolor vestibulum. Sed id magna libero. <a href="">Sed et interdum tellus</a>. Integer consectetur lacus vitae porttitor gravida. Nullam porttitor enim in pellentesque pharetra. Phasellus suscipit congue orci, ac finibus urna. Duis fringilla eu metus ut sodales. Aliquam interdum est ut fringilla maximus. Suspendisse ac posuere magna, id iaculis massa. </p>
    <p>Aenean commodo facilisis dolor vel ornare. Nulla nisl lacus, fringilla sed venenatis vel, mollis pulvinar lorem. Nunc iaculis lacus odio, id pellentesque nisl faucibus quis. Nunc id eros eu dolor interdum porttitor ut eget turpis. Morbi condimentum tellus non neque tristique commodo. Praesent ac felis in nulla porta porta non sit amet nunc. In viverra est sagittis tortor fermentum auctor vitae eu mi. Integer ornare auctor ipsum sed bibendum. Integer suscipit quam a justo viverra, ac viverra enim dignissim. Vestibulum vitae ipsum et mi euismod dictum nec ut eros. </p>
    <p>Quisque non consequat arcu, id pellentesque odio. Curabitur dui est, volutpat non sagittis sit amet, blandit et elit. Nullam suscipit in elit pellentesque volutpat. Duis ultrices volutpat nisi eget efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi pulvinar scelerisque rhoncus. Maecenas quis pretium est. Mauris sit amet diam in purus pulvinar egestas. Donec ut purus vestibulum, vestibulum mauris ut, gravida nulla. Fusce et bibendum dolor. Nam est massa, pretium eget facilisis posuere, scelerisque fringilla enim. Aliquam elementum augue ac sagittis dignissim. Integer ornare nisl est. </p><p>Nullam turpis sem, tristique ac tristique et, euismod id eros. Etiam convallis volutpat mi, et imperdiet arcu ultricies ac. Vestibulum et odio rutrum, ullamcorper ipsum at, faucibus enim. Nam vitae ligula ut dui congue semper eu a metus. Integer consectetur ullamcorper tellus a efficitur. Proin pharetra laoreet elit, nec pretium lacus. Donec sagittis quis est nec tincidunt. Etiam gravida bibendum nibh, a congue nisl finibus vel. Cras quis gravida massa. Proin lobortis et neque a elementum. Sed ullamcorper orci quis neque sodales, eget euismod libero ullamcorper. Donec sit amet blandit metus. Morbi malesuada odio non erat auctor, in condimentum nulla imperdiet. Vestibulum suscipit efficitur cursus. </p>
</div>`;
const LoginPageHtml = `
<div class="loginPage">
    <form onSubmit="">
        <label for="username">Username:<input type="text" name="username" placeholder="username" /></label>
        <label for="password">Password:<input type="password" name="password" placeholder="password" /></label>
        <input type="submit" name="login" value="Log in" />
    </form>
    <p class="loginPageLink" onClick="changePage(201)">Not a Registered User?</p>
</div>`
const RegisterPageHtml = `
<div class="about">
    <h2>How To Register:</h2>
    <p>That's simple: you don't!  The only user account is Andrew Wobeck's, and it will stay that way for the forseeable future.  You are free to continue as a gust using the button below, however.</p>
    <button class="secondaryBtn" onClick="changePage(300)">Continue as a Guest</button>
</div>`
const RecipiePageHtml = `<div id="recipiePage"></div>`;
const DetailedRecipieHtml = `<div id='recipieDetails'></div>`;
const AddRecHtml = `        
<div class="addRecipie">
    <h2>Add Recipie</h2>
    <form id="addRecForm">
        <label for="name">Recipie Name: <input type="text" id="rname" placeholder="Recipie Name" /></label>
        <label for="description">Recipie Description: <input type="text" id="rdesc" placeholder="Recipie Description" /></label>
        <label for="time">Approximate Cooking Time: <input type="number" id="rtime" placeholder="0" /></label>
        <div id="ingredientListAdd">
            <label for="ingredient">Ingredients:</label>
            <div>
                <input type="text" class="rIng" placeholder="ingredient" />
                <select class="rIngAmt">
                    <option value="0">A tiny amount(ex: most seasoning)</option>
                    <option value="1">A small amount</option>
                    <option value="2">A medium amount</option>
                    <option value="3">A large amount</option>
                </select>
                <button onclick="addForm(0)"><i class="fa fa-check"></i></button>
            </div>
        </div>
        <div id="directionListAdd">
            <label for="direction">Recipie Directions:</label>
            <div>
                <input type="text" class="rIng" placeholder="direction" />
                <button onclick="addForm(1)"><i class="fa fa-check"></i></button>
            </div>
        </div>
        <input type="submit" value="Add Recipie">
    </form>
</div>`;
const addIngPartial = `
<div>
    <input type="text" class="rIng" placeholder="ingredient">
    <select class="rIngAmt">
        <option value="0">A tiny amount(ex: most seasoning)</option>
        <option value="1">A small amount</option>
        <option value="2">A medium amount</option>
        <option value="3">A large amount</option>
    </select>
    <button onclick="addForm(0)"><i class="fa fa-check"></i></button>
    <button onClick="return delForm(event)"><i class="fas fa-times"></i></button>
</div>
`;
let addDirPartial = `
<div>
<input type="text" class="rDir" placeholder="direction">
<button onclick="addForm(1)"><i class="fa fa-check"></i></button>
<button onClick="return delForm(event)"><i class="fas fa-times"></i></button>
<input type="checkbox" value="isStar">Indent this direction
</div>
`;
var pages = {
    0: NotLoggedInHtml,
    100: aboutPageHtml,
    200: LoginPageHtml,
    201: RegisterPageHtml,
    300: RecipiePageHtml,
    301: DetailedRecipieHtml,
    400: AddRecHtml,
    401: addIngPartial,
    402: addDirPartial
}