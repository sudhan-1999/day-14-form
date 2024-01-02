
function create_label(el_name, att_1, att_1_name, content) {
    let el = document.createElement(el_name);
    el.setAttribute(att_1, att_1_name);
    el.innerHTML = content;
    return el;
}

function breakLine() {
    return document.createElement("br");
}

function create_input(el_name, att_name, att_value, att_1_name, att_1_value, att_2_name, att_2_value) {
    let el = document.createElement(el_name);
    el.setAttribute(att_name, att_value);
    el.setAttribute(att_1_name, att_1_value);
    el.setAttribute(att_2_name, att_2_value);
    return el;
}

function create_label_2(el_name, att_1, att_1_name, att_2, att_2_name, content) {
    let el = document.createElement(el_name);
    el.setAttribute(att_1, att_1_name);
    el.setAttribute(att_2, att_2_name);
    el.innerHTML = content;
    return el;
}

function create_table_element(el_name, att_1, att_1_name, content) {
    let el = document.createElement(el_name);
    el.setAttribute(att_1, att_1_name);
    el.innerHTML = content;
    return el;
}

function create_table_data(el_name, att_1, att_1_name, content) {
    let el = document.createElement(el_name);
    el.setAttribute(att_1, att_1_name);
    el.innerHTML = content;
    return el;
}

function buttonClick() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let address = document.getElementById("add").value;
    let pincode = document.getElementById("pin").value;
    let gender = document.getElementById("gender").value;
    let foodChoice = document.querySelector('input[name="food"]:checked').value;
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;

    document.getElementById("td1").innerHTML = fname;
    document.getElementById("td2").innerHTML = lname;
    document.getElementById("td3").innerHTML = address;
    document.getElementById("td4").innerHTML = pincode;
    document.getElementById("td5").innerHTML = gender;
    document.getElementById("td6").innerHTML = foodChoice;
    document.getElementById("td7").innerHTML = state;
    document.getElementById("td8").innerHTML = country;
    // Clear input fields
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("add").value = "";
    document.getElementById("pin").value = "";
    document.getElementById("gender").value = "";
    document.querySelector('input[name="food"]:checked').checked = false;
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
}

let label = create_label("label", "for", "firstname", "First-Name");
let input = create_input("input", "type", "text", "id", "fname", "name", "fname");
let label1 = create_label("label", "for", "lastname", "last-Name");
let input1 = create_input("input", "type", "text", "id", "lname", "name", "lname");
let label2 = create_label("label", "for", "address", "address");
let input2 = create_input("textarea", "name", "text", "form", "adress", "id", "add");
let label3 = create_label("label", "for", "pincode", "pincode");
let input3 = create_input("input", "type", "text", "id", "pin", "name", "pin");
let label4 = create_label("label", "for", "gender", "Gender");
let input4 = create_input("input", "type", "text", "id", "gender", "name", "gender");
let label5 = create_label("label", "for", "food", "Choice of Food");
let input6 = create_input("input", "type", "radio", "id", "food1", "name", "food", "value", "food-1");
let label6 = create_label_2("label", "for", "food1", "class", "food-1", "food-1");
let input7 = create_input("input", "type", "radio", "id", "food2", "name", "food", "value", "food-2");
let label7 = create_label_2("label", "for", "food2", "class", "food-2", "food-2");
let input8 = create_input("input", "type", "radio", "id", "food3", "name", "food", "value", "food-3");
let label8 = create_label_2("label", "for", "food3", "class", "food-3", "food-3");
let input9 = create_input("input", "type", "radio", "id", "food4", "name", "food", "value", "food-4");
let label9 = create_label_2("label", "for", "food4", "class", "food-4", "food-4");
let input10 = create_input("input", "type", "radio", "id", "food5", "name", "food", "value", "food-5");
let label10 = create_label_2("label", "for", "food5", "class", "food-5", "food-5");
let label11 = create_label("label", "for", "state", "state");
let input11 = create_input("input", "type", "text", "id", "state", "name", "state");
let label12 = create_label("label", "for", "country", "Country");
let input12 = create_input("input", "type", "text", "id", "country", "name", "country");
let btn = create_label_2("button", "type", "button", "onclick", "buttonClick()", "Submit");

document.body.append(
    label, breakLine(), input, breakLine(),
    label1, breakLine(), input1, breakLine(),
    label2, breakLine(), input2, breakLine(),
    label3, breakLine(), input3, breakLine(),
    label4, breakLine(), input4, breakLine(),
    label5, breakLine(), input6, label6, breakLine(),
    input7, label7, breakLine(),
    input8, label8, breakLine(),
    input9, label9, breakLine(),
    input10, label10, breakLine(),
    label11, breakLine(), input11, breakLine(),
    label12, breakLine(), input12, breakLine(),
    breakLine(), breakLine(), btn
);

function create_table(el_name) {
    let el = document.createElement(el_name);
    return el;
}

function create_table_1(el_name, content) {
    let el = document.createElement(el_name);
    el.innerHTML = content;
    return el;
}

function create_table_2(el_name, att_1, att_1_name, content) {
    let el = document.createElement(el_name);
    el.setAttribute(att_1, att_1_name);
    el.innerHTML = content;
    return el;
}

let table = create_table("table");
let tr = create_table("tr");
let th1 = create_table_1("th", "First-Name");
let th2 = create_table_1("th", "last-Name");
let th3 = create_table_1("th", "Address");
let th4 = create_table_1("th", "Pincode");
let th5 = create_table_1("th", "Gender");
let th6 = create_table_1("th", "Food");
let th7 = create_table_1("th", "State");
let th8 = create_table_1("th", "country");
let tr1 = create_table("tr");
let td1 = create_table_2("td", "id", "td1", "Initial Content 1");//inital content will be replaced with the input values
let td2 = create_table_2("td", "id", "td2", "Initial Content 2");
let td3 = create_table_2("td", "id", "td3", "Initial Content 3");
let td4 = create_table_2("td", "id", "td4", "Initial Content 4");
let td5 = create_table_2("td", "id", "td5", "Initial Content 5");
let td6 = create_table_2("td", "id", "td6", "Initial Content 6");
let td7 = create_table_2("td", "id", "td7", "Initial Content 7");
let td8 = create_table_2("td", "id", "td8", "Initial Content 8");

tr.append(th1, th2, th3, th4, th5, th6, th7 ,th8);
tr1.append(td1, td2, td3, td4, td5, td6, td7 ,td8);
table.append(tr, tr1);
document.body.append(table);





