(function () {
    var students = [{
            name: 'Liudmyla',
            lastName: 'Bashta',
            img: 'https://www.plagiarismtoday.com/wp-content/uploads/2016/07/nyancat-385-sized.jpg',
            coverImg: 'http://i2.kym-cdn.com/photos/images/facebook/000/243/865/8f3.jpg',
            email: 'liudmyla.bashta@gmail.com',
            skills: ['Javascript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Chapkailo',
            img: 'https://s-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5--pikachu-halloween-costume-diy-halloween-costumes.jpg',
            coverImg: 'http://fbcovershub.com/media/cover-250-beautiful-seaside-fb-cover-1388015476.jpg',
            email: 'romafromukraine@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystyna',
            lastName: 'Dalivska',
            img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg',
            coverImg: 'https://sky.easypano.com/EPSUpload2/Pano/2017/04-12/12/636275969355928205/560_315.jpg',
            email: 'khrystynadalivska@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Ivan',
            lastName: 'Gnatyshyn',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'gnatyshyn.ivan@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: "Hun'ka",
            img: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg',
            coverImg: 'http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg',
            email: 'andriyggg@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Maksym',
            lastName: 'Izmailov',
            img: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_960_720.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/03/06/05/03/sunrise-1239728_960_720.jpg',
            email: 'maksym.izmailov.lv@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Taras',
            lastName: 'Kharkhalis',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'taraskharkhalis97@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystia',
            lastName: 'Kondratovych',
            img: 'https://www.webdesign.org/img_articles/21726/17.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/10/13/10/37/dandelion-1737324_960_720.jpg',
            email: 'khrustyk@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Iuliia',
            lastName: 'Kurylo',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljkhtuNjmEz2YeriPLPdntnTKNAwXFOAQSx1u6yAkPhYYw8-Pnw',
            coverImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-qepvLICH8tsGuZqbZwpO7rk5afp274Lu4bgjai8Uo30gDKifA',
            email: 'iulia.kurylo@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Mandziuk',
            img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
            coverImg: 'http://html.com/wp-content/uploads/very-large-flamingo.jpg',
            email: 'rmandzyuk94@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Oleh',
            lastName: 'Marko',
            img: 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
            coverImg: 'http://wiki-carpathians.com/wp-content/uploads/2015/02/climate-carpathians.jpg',
            email: 'olehmarko@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anatoliy',
            lastName: 'Mazur',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'mail4tolik@gmail.com',
            skills: ['JavaScript', 'CSS', 'HTML']
        },
        {
            name: 'Vitaliy',
            lastName: 'Palyushok',
            img: 'https://www.mammoth.com.au/res/images/mammothcloud/person-img.png',
            coverImg: 'http://facebookcovers.piz18.com/wp-content/uploads/2012/04/geek-fb-cover.jpg',
            email: 'xskeletons@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Prokopiak',
            Img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'sprokopyak96@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Sendun',
            img: 'http://i.piccy.info/i9/a25aa836358fb23a05d6e9207c976dd9/1500482900/30480/1163444/537377255ws00241_57th_annua.jpg',
            coverImg: 'http://i.piccy.info/i9/b311de1aaff52532b361a178e8e35de4/1500482959/135850/1163444/0008540461_10.jpg',
            email: 'steve.neeson21@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: 'Soroka',
            img: '',
            coverImg: '',
            email: '',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Illya',
            lastName: 'Syniuk',
            img: 'https://www.facebook.com/photo.php?fbid=578754465640942&set=a.317602991756092.1073741826.100005191805447&type=3&theater',
            coverImg: 'https://www.facebook.com/photo.php?fbid=578802345636154&set=a.326403767542681.1073741828.100005191805447&type=3&theater',
            email: 'illyasynuik@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrew',
            lastName: 'Tantsiura',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'andrii.tans@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Liliya',
            lastName: 'Tserkovna',
            img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c0.17.160.160/p160x160/14725559_311214412585028_1352062715786494390_n.jpg?oh=b2cbcb3de774187b75d5253a276bc2f7&oe=59F5D47B',
            coverImg: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14368772_295189700854166_8626244722206545788_n.jpg?oh=02cf7516f9337bc439a42595ff893821&oe=5A051EC4',
            email: 'lilichkaTserkovna@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anton',
            lastName: 'Zhygalov',
            img: 'http://static.tvtropes.org/pmwiki/pub/images/Hello_Kitty_Pink_2981.jpg',
            coverImg: 'https://thumb1.shutterstock.com/display_pic_with_logo/156640/208511908/stock-photo-arad-romania-september-hello-kitty-pattern-printed-on-cardboard-box-studio-shot-208511908.jpg',
            email: 'antonzhygalov@gmail.com',
            skills: ['aJavaScript', 'HTML', 'CSS']
        }
    ];

    var container = document.querySelector('#container');
    var studentsTable, tbody;
    var tableHeader = ['Student', 'email', 'Profile picture', 'Skills', 'controls'];
    var reverseSorting = true;
    var saveOrEdit = 0;
    var studentsIndex = 0;
    var editStudentIndex = 0;
    
    function createTheForm () {
        var formTag = document.createElement('form');
        formTag.className = 'form createAndEditStudents';
        var header = document.createElement('h1');
        header.appendChild(document.createTextNode('Create or edit student'));
        formTag.appendChild(header);
                           
        var inputTypes = ['text', 'text', 'email', 'url', 'text'];
        var labels = ['name', 'lastname', 'email', 'URL of profile picture', 'skills'];   
        
        var fieldsContainer = document.createElement('div');
        fieldsContainer.className = 'fieldsContainer';
        for(var i = 0; i < inputTypes.length && i < labels.length; i++) {
            var field = document.createElement('input');
            
            field.setAttribute('type', inputTypes[i]);
            field.setAttribute('placeholder', labels[i]);
            if(i < inputTypes.length - 1) {
                field.setAttribute('require', '');
            }
            
            if (labels[i] !== 'URL of profile picture') {
                field.className = labels[i] + ' form-control'; 
            } 
            else {
                field.className = 'profilePicture form-control';
            }
            
            fieldsContainer.appendChild(field);
        }
        
        formTag.appendChild(fieldsContainer);
        var saveBtn = document.createElement('input');
        saveBtn.setAttribute('type', 'button');
        saveBtn.setAttribute('value', 'save');
        saveBtn.className = 'saveBtn btn btn-primary';
        
        var cancelBtn = document.createElement('input');
        cancelBtn.setAttribute('type', 'reset');
        cancelBtn.setAttribute('value', 'cancel');
        cancelBtn.className = 'cancelBtn btn btn-primary';
        
        formTag.appendChild(saveBtn);
        formTag.appendChild(cancelBtn);
        
        container.appendChild(formTag);
        
    }
    
    function createTheTable () {
        var forSorting = ['name', 'email', 'img', 'skills', 'control'];
        studentsTable = document.createElement('table');
        studentsTable.className = 'table table-hover studentsTable';

        var thead = document.createElement('thead');
        tbody = document.createElement('tbody');
        tbody.className = 'tBody';
        var theadRow = document.createElement('tr'); 
        
        for (var i = 0; i < tableHeader.length; i++) {
            var th = document.createElement('th');
            th.className = forSorting[i];
            if(th.className === 'name' || th.className === 'email') {
                th.innerHTML = '<span class="glyphicon glyphicon-sort">';
            }
            th.appendChild(document.createTextNode(tableHeader[i]));
            
            
            theadRow.appendChild(th);
        }
        
        for (var j = 0; j < students.length; j++) {
            createOneRow (j);
        }
        
        thead.appendChild(theadRow);
        studentsTable.appendChild(thead);
        studentsTable.appendChild(tbody);
        container.appendChild(studentsTable);
    
    }
    
    function createOneRow (index) {
        var tr = document.createElement('tr');
        tr.className = 'tr' + index;
        tr.setAttribute('data-id', index);
        for (var k = 0; k < tableHeader.length; k++) {
            var td = document.createElement('td');
            tr.appendChild(td);
        }  
        tbody.appendChild(tr);
    }
    
    function oneStudent (studentsIndex) {
        var editIco = '<i class="glyphicon glyphicon-edit editStudent"></i>';
        var removeIco = '<i class="glyphicon glyphicon-trash removeStudent"></i>';
        var target = document.querySelectorAll('.tBody tr')[studentsIndex];
        var student = students[studentsIndex].name + ' ' + students[studentsIndex].lastName;
        
        if(students[studentsIndex].img !== '') {
        var profilePicture = '<img src="' + students[studentsIndex].img + '">';
        }
        
        var studentsRow = [student, students[studentsIndex].email, profilePicture, students[studentsIndex].skills.join(', '), editIco + ' ' + removeIco];
        
        for (var m = 0; m < studentsRow.length; m++) {
            target.querySelectorAll('td')[m].innerHTML = studentsRow[m];
        }
    }
    
    function fillTheTable() {
        for (var j = 0; j < students.length; j++) {
            oneStudent (j);
        }      
    }
    
    function alertStudent(event) {
        var target = event.target;
        console.log('student');
        while (target != HTMLTableRowElement) {
            if (target.tagName == 'TR') {
                alert(target.firstChild.innerHTML);
                break;
            } 
            
            target = target.parentNode;
        }
    } 
    
    function clearTheForm () {
        var formFields = container.querySelectorAll('.fieldsContainer input');
        for (var i = 0; i < formFields.length; i++) {
            formFields[i].value = '';
        }
    }
    
    function saveAndEditStudent (index) {
        var successfulValidation = 0;
        var existingEmail = false;
        var validationArr = [
            {
                field: container.querySelector('input.name').value,
                regExp: /^[a-zA-Z]{2,}$/gi
            }, 
            {
                field: container.querySelector('input.lastname').value,
                regExp: /^[a-zA-Z]{2,}$/gi
            }, 
            {
                field: container.querySelector('input.email').value,
                regExp: /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/gi
            }, 
            {
                field: container.querySelector('input.profilePicture').value,
                regExp: /^(?:(?:https?)+\:\/\/+[a-zA-Z0-9\/\._-]{1,})+(?:(?:jpe?g|png|gif))$/gim
            }, 
            {
                field: container.querySelector('input.skills').value,
                regExp: /^(\w+(\,\s\w+)*)?$/gim
            }, 
        ]
        
        for (var i = 0; i < validationArr.length; i++) {
            if(validationArr[i].regExp.test(validationArr[i].field)) {
                successfulValidation += 1;
            }
            else {
                console.log(validationArr[i]);
            }
        }

        
        if (successfulValidation === validationArr.length) {
            var formStudentData = {
                    name: document.querySelector('.name').value,
                    lastName: document.querySelector('.lastname').value,
                    img: document.querySelector('.profilePicture').value,
                    email: document.querySelector('.email').value,
                    skills: document.querySelector('.skills').value.split(', ')        
                }
                         
            if(saveOrEdit === 0) {
                for(var i = 0; i < students.length; i++) {
                    if(formStudentData.email === students[i].email) {
                        existingEmail = true;
                    }
                }
                if(!existingEmail) {
                    students.push(formStudentData);

                    createOneRow (students.length - 1);
                    oneStudent (students.length - 1);
                }
                else {
                    alert('email exist');
                }
            }
            else {
                var curentStudent = students[index];
                Object.assign(curentStudent, formStudentData);
                oneStudent (index);
                saveOrEdit = 0;
            }
            clearTheForm ();
        }
        else {
            alert('there are invalid fields');
        }
    }
    
    function removeStudent (index) {
        var target = document.querySelectorAll('.tBody tr')[index];
        students.splice(index, 1);
        target.parentNode.removeChild(target);
        
        for (var j = 0; j < document.querySelectorAll('.tBody tr').length; j++) {
            document.querySelectorAll('.tBody tr')[j].setAttribute('data-id', j);
        }
    }
    
    function editStudent (index) {
        var target = document.querySelectorAll('.tBody tr')[index];
        var fields = document.querySelectorAll('.fieldsContainer input');
        var cells = target.querySelectorAll('td');
        var nameArr = cells[0].innerHTML.split(' ');
        document.querySelector('input.name').value = nameArr[0];
        document.querySelector('input.lastname').value = nameArr[1];
        
        for (var i = 1; i < cells.length - 1; i++) {
            var fieldValue = cells[i].innerHTML;
            if(cells[i].firstChild.tagName == 'IMG' && cells[i].firstChild.src !== undefined) {
                fieldValue = cells[i].firstChild.src;
            } 
            
            fields[i+1].value = fieldValue;
        }
        
        saveOrEdit = 1;
    }
    
    Array.prototype.sortKey = function(key, direction) {
        function mySorting(k1, k2) {
            if(direction) {
                if (k1[key] > k2[key]) return 1;
                if (k1[key] < k2[key]) return -1;
            } else {
                if (k1[key] > k2[key]) return -1;
                if (k1[key] < k2[key]) return 1;                
            }
            return 0;
        }
            
        return this.sort(mySorting);
    }
    
    function sorting(event) {
        var changeIcon = event.target.firstChild;
        if(changeIcon.className === 'glyphicon glyphicon-sort' || changeIcon.className === 'glyphicon glyphicon-sort-by-alphabet-alt') {
            reverseSorting = true;
            changeIcon.className = 'glyphicon glyphicon-sort-by-alphabet';
        } 
        else if (changeIcon.className === 'glyphicon glyphicon-sort-by-alphabet') {
            reverseSorting = false;
            changeIcon.className = 'glyphicon glyphicon-sort-by-alphabet-alt';       
        }
        
        students.sortKey(event.target.className, reverseSorting);
        fillTheTable();
    } 
    
    function sortingTable (event) {
        sorting(event);
    }

    createTheForm ();
    createTheTable ();
    fillTheTable();

    container.querySelector('tbody').addEventListener('click', function(e){
        var userRow = e.target.closest('tr');
        var userId = userRow.getAttribute('data-id');

        if (e.target && e.target.matches(".removeStudent")) {
            removeStudent(userId)
        } 
        else if (e.target && e.target.matches(".editStudent")) {
            editStudent(userId);
            editStudentIndex = userId;
        } 
        else {
            alertStudent(event);
        }
    });
    
    container.querySelector('.saveBtn').addEventListener('click', function(e) {
        saveAndEditStudent(editStudentIndex);
    });
    
    container.querySelector('th.name').addEventListener('click', sortingTable);
    
    container.querySelector('th.email').addEventListener('click', sortingTable);
})();