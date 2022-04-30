<!-- 
Bootstrap 5.1
Developer : Ashish Gurung 
-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aashish edit</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css?<?= filemtime('css/style.css'); ?>">
    <script src="js/bootstrap.bundle.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/script.js"></script>
</head>

<body>

    <div class="container text-uppercase fs-1">
        <div class="row" style="color:white; min-height:100vh">
            <div class="col  bg-dark border border-white d-flex align-items-center justify-content-center">
                <div class="d-flex flex-column">
                    <div> syd time </div>
                  <div id="Clock" class="d-flex">  09<span class="seperator">:</span>25 PM </div>
                </div>
            </div>
            <div class="col w-50 bg-dark">
                <div class="row border border-white h-50 d-flex align-items-center justify-content-center">
                    <div class="d-flex justify-content-center">
                        09<span class="seperator">:</span>25 PM
                    </div>
                </div>
                <div class="row border border-white h-50 ">
                    <div id="Clock3" class="d-flex align-items-center justify-content-center">
                        09<span class="seperator">:</span>25 PM
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>