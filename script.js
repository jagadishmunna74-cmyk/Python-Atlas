const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
$("#year").textContent = new Date().getFullYear();

const menuToggle = $("#menuToggle"), nav = $(".desktop-nav");
menuToggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));});
$$(".desktop-nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const topics = {
 history: ["Python history", "Python was created by Guido van Rossum and first released in 1991. It focuses on readable syntax and supports procedural, object-oriented, and functional programming.", 'print("Hello, Python!")'],
 features: ["Key features", "Python is readable, high-level, dynamically typed, portable, and supported by a large community and package ecosystem.", 'language = "Python"\nprint(language, "is easy to read")'],
 applications: ["Applications", "Python is used for web development, automation, data analysis, artificial intelligence, scientific computing, education, and scripting.", 'tasks = ["web", "data", "automation", "AI"]\nfor task in tasks:\n    print(task)'],
 variables: ["Variables", "Variables are names that refer to values. Python determines a variable's type at runtime.", 'name = "Jagadish"\nage = 25\nprint(name, age)'],
 datatypes: ["Python data types", "Common built-in types include str, int, float, bool, list, tuple, set, and dict.", 'name = "Python"\ncount = 3\nprices = [10.5, 20.0]\nprint(type(name), type(count), type(prices))'],
 libraries: ["Python libraries", "The standard library includes tools such as math, random, datetime, and statistics. Third-party packages include NumPy, pandas, Matplotlib, and scikit-learn.", 'import math\nprint(math.sqrt(49))']
};
$$("[data-topic]").forEach(btn=>btn.addEventListener("click",()=>{const t=topics[btn.dataset.topic];$("#topicDetailContent").innerHTML=`<h3>${t[0]}</h3><p>${t[1]}</p><pre><code>${t[2].replaceAll("&","&amp;").replaceAll("<","&lt;")}</code></pre>`;$("#topicDetail").hidden=false;$("#topicDetail").scrollIntoView({behavior:"smooth",block:"nearest"});}));
$("#closeTopic")?.addEventListener("click",()=>$("#topicDetail").hidden=true);

const programs = [
["Hello World","Basics",'print("Hello, World!")'],
["Add Two Numbers","Basics",'a = float(input("Enter first number: "))\nb = float(input("Enter second number: "))\nprint("Sum =", a + b)'],
["Swap Two Variables","Basics",'a, b = 10, 20\na, b = b, a\nprint(a, b)'],
["Check Even or Odd","Conditions",'n = int(input("Enter a number: "))\nprint("Even" if n % 2 == 0 else "Odd")'],
["Largest of Three Numbers","Conditions",'a, b, c = map(int, input("Enter three numbers: ").split())\nprint("Largest =", max(a, b, c))'],
["Leap Year","Conditions",'year = int(input("Enter year: "))\nleap = year % 400 == 0 or (year % 4 == 0 and year % 100 != 0)\nprint("Leap year" if leap else "Not a leap year")'],
["Factorial","Loops",'n = int(input("Enter a non-negative integer: "))\nfact = 1\nfor i in range(1, n + 1):\n    fact *= i\nprint(fact)'],
["Multiplication Table","Loops",'n = int(input("Enter number: "))\nfor i in range(1, 11):\n    print(f"{n} x {i} = {n*i}")'],
["Fibonacci Series","Loops",'n = int(input("How many terms? "))\na, b = 0, 1\nfor _ in range(n):\n    print(a, end=" ")\n    a, b = b, a + b'],
["Prime Number","Numbers",'n = int(input("Enter number: "))\nis_prime = n > 1\nfor i in range(2, int(n ** 0.5) + 1):\n    if n % i == 0:\n        is_prime = False\n        break\nprint("Prime" if is_prime else "Not prime")'],
["Palindrome String","Strings",'text = input("Enter text: ")\nprint("Palindrome" if text == text[::-1] else "Not palindrome")'],
["Reverse a String","Strings",'text = input("Enter text: ")\nprint(text[::-1])'],
["Count Vowels","Strings",'text = input("Enter text: ").lower()\nprint(sum(ch in "aeiou" for ch in text))'],
["Sort a List","Lists",'numbers = [5, 2, 9, 1, 6]\nnumbers.sort()\nprint(numbers)'],
["Sum of List Elements","Lists",'numbers = [10, 20, 30, 40]\nprint(sum(numbers))'],
["Find Maximum in List","Lists",'numbers = [12, 4, 25, 9]\nprint(max(numbers))'],
["Remove Duplicates","Lists",'items = [1, 2, 2, 3, 1, 4]\nprint(list(dict.fromkeys(items)))'],
["Dictionary Example","Data structures",'student = {"name": "Asha", "marks": 92}\nprint(student["name"], student["marks"])'],
["Simple Function","Functions",'def greet(name):\n    return f"Hello, {name}!"\nprint(greet("Jagadish"))'],
["Recursion: Fibonacci","Functions",'def fib(n):\n    if n < 2: return n\n    return fib(n-1) + fib(n-2)\nprint(fib(6))'],
["Exception Handling","Errors",'try:\n    number = int(input("Enter integer: "))\n    print(number)\nexcept ValueError:\n    print("Please enter a valid integer.")'],
["Write a Text File","Files",'with open("sample.txt", "w", encoding="utf-8") as file:\n    file.write("Learning Python")\nprint("File saved")'],
["Read a Text File","Files",'with open("sample.txt", "r", encoding="utf-8") as file:\n    print(file.read())'],
["Current Date","Libraries",'from datetime import date\nprint(date.today())'],
["Random Number","Libraries",'import random\nprint(random.randint(1, 100))'],
["Square Root","Math",'import math\nn = float(input("Enter number: "))\nif n >= 0:\n    print(math.sqrt(n))\nelse:\n    print("Enter a non-negative number")'],
["Quadratic Equation Roots","Math",'import math\na, b, c = 1, -5, 6\nd = b*b - 4*a*c\nif d >= 0:\n    print((-b + math.sqrt(d))/(2*a), (-b - math.sqrt(d))/(2*a))\nelse:\n    print("Roots are complex")'],
["Simple Calculator","Functions",'a = float(input("First number: "))\nop = input("Operator (+ - * /): ")\nb = float(input("Second number: "))\nif op == "+": print(a+b)\nelif op == "-": print(a-b)\nelif op == "*": print(a*b)\nelif op == "/" and b != 0: print(a/b)\nelse: print("Invalid operation")'],
["Check Positive Negative Zero","Conditions",'n = float(input("Enter number: "))\nif n > 0: print("Positive")\nelif n < 0: print("Negative")\nelse: print("Zero")'],
["Grade Calculator","Conditions",'marks = float(input("Marks (0-100): "))\nif marks >= 90: grade = "A"\nelif marks >= 75: grade = "B"\nelif marks >= 60: grade = "C"\nelse: grade = "Needs improvement"\nprint(grade)'],
["Armstrong Number","Numbers",'n = int(input("Enter number: "))\ndigits = str(n)\ntotal = sum(int(d) ** len(digits) for d in digits)\nprint("Armstrong" if n == total else "Not Armstrong")'],
["GCD of Two Numbers","Math",'import math\na, b = map(int, input("Enter two numbers: ").split())\nprint(math.gcd(a, b))'],
["Count Words","Strings",'sentence = input("Enter a sentence: ")\nprint(len(sentence.split()))'],
["Anagram Check","Strings",'a = input("First word: ").replace(" ", "").lower()\nb = input("Second word: ").replace(" ", "").lower()\nprint("Anagrams" if sorted(a) == sorted(b) else "Not anagrams")'],
["List Comprehension","Lists",'squares = [n*n for n in range(1, 11)]\nprint(squares)'],
["Tuple Example","Data structures",'coordinates = (10, 20)\nprint("x =", coordinates[0], "y =", coordinates[1])'],
["Set Operations","Data structures",'a = {1, 2, 3}\nb = {3, 4, 5}\nprint("Union:", a | b)\nprint("Intersection:", a & b)'],
["Class and Object","OOP",'class Student:\n    def __init__(self, name): self.name = name\n    def greet(self): print("Hello", self.name)\nStudent("Jagadish").greet()'],
["Inheritance","OOP",'class Animal:\n    def speak(self): print("Animal sound")\nclass Dog(Animal):\n    def bark(self): print("Woof!")\nd = Dog(); d.speak(); d.bark()'],
["Linear Search","Algorithms",'items = [4, 8, 15, 16, 23, 42]\ntarget = 16\nprint(items.index(target) if target in items else "Not found")'],
["Binary Search","Algorithms",'items = [1, 3, 5, 7, 9, 11]\ntarget = 7\nlow, high = 0, len(items)-1\nwhile low <= high:\n    mid = (low+high)//2\n    if items[mid] == target: print("Found at", mid); break\n    if items[mid] < target: low = mid+1\n    else: high = mid-1'],
["Bubble Sort","Algorithms",'items = [5, 1, 4, 2, 8]\nfor end in range(len(items)-1, 0, -1):\n    for i in range(end):\n        if items[i] > items[i+1]: items[i], items[i+1] = items[i+1], items[i]\nprint(items)'],
["Matrix Addition","Lists",'a = [[1, 2], [3, 4]]\nb = [[5, 6], [7, 8]]\nfor i in range(2): print([a[i][j] + b[i][j] for j in range(2)])'],
["Pattern: Star Triangle","Loops",'for i in range(1, 6):\n    print("* " * i)'],
["Number Guessing Game","Games",'import random\nsecret = random.randint(1, 20)\nwhile True:\n    guess = int(input("Guess 1-20: "))\n    if guess == secret: print("Correct!"); break\n    print("Too low" if guess < secret else "Too high")'],
["Rock Paper Scissors","Games",'import random\nchoice = random.choice(["rock", "paper", "scissors"])\nprint("Computer chose:", choice)'],
["Mean of Numbers","Math",'import statistics\nvalues = [10, 20, 30, 40]\nprint(statistics.mean(values))'],
["CSV Read Example","Files",'import csv\nwith open("data.csv", newline="", encoding="utf-8") as f:\n    for row in csv.reader(f): print(row)'],
["JSON Example","Files",'import json\nstudent = {"name": "Jagadish", "skills": ["Python", "HTML"]}\ntext = json.dumps(student, indent=2)\nprint(text)\nprint(json.loads(text))'],
["Countdown Timer","Loops",'import time\nfor n in range(5, 0, -1):\n    print(n)\n    time.sleep(1)\nprint("Go!")']
];
const categories = ["All", ...new Set(programs.map(p=>p[1]))];
let activeCategory = "All";
const filters = $("#categoryFilters"), grid = $("#programGrid"), search = $("#programSearch");
categories.forEach(cat=>{const b=document.createElement("button");b.className="filter-chip"+(cat==="All"?" active":"");b.textContent=cat;b.addEventListener("click",()=>{activeCategory=cat;$$(".filter-chip").forEach(x=>x.classList.toggle("active",x===b));renderPrograms();});filters.append(b);});
function escapeHtml(s){return s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");}
function renderPrograms(){const q=search.value.trim().toLowerCase();const list=programs.filter(p=>(activeCategory==="All"||p[1]===activeCategory)&&p.slice(0,2).join(" ").toLowerCase().includes(q));grid.innerHTML=list.map((p)=>`<article class="program-card"><div class="program-card-head"><h3>${escapeHtml(p[0])}</h3><span class="program-category">${escapeHtml(p[1])}</span></div><p>Practice this Python concept and change the inputs to explore the result.</p><pre><code>${escapeHtml(p[2])}</code></pre><button class="copy-btn" data-copy="${encodeURIComponent(p[2])}">▣ Copy code</button></article>`).join("");$("#resultCount").textContent=`${list.length} practical${list.length===1?"":"s"}`;$("#emptyState").hidden=list.length>0;grid.querySelectorAll("[data-copy]").forEach(b=>b.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(decodeURIComponent(b.dataset.copy));showToast("Code copied to clipboard!");}catch(e){showToast("Copy unavailable: select the code and copy it.");}}));}
function showToast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200);}
search.addEventListener("input",renderPrograms);
$("#clearFilters").addEventListener("click",()=>{search.value="";activeCategory="All";$$(".filter-chip").forEach((b,i)=>b.classList.toggle("active",i===0));renderPrograms();});
document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();search.focus();}});
renderPrograms();
