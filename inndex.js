<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Nicholas Chiang</title>
    <link rel="icon" href="img/headset_logo_square.png" type="image/x-icon">

    <!-- Bootstrap -->
    <link href="styles/bootstrap.min.css" rel="stylesheet">
    <link href="ionicons/css/ionicons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.plyr.io/3.5.6/plyr.css" />
    <!-- main css -->
    <link href="styles/style.css" rel="stylesheet">
    <link href="styles/bundle.min.css" rel="stylesheet">

    <!-- modernizr -->
    <script src="https://unpkg.com/ionicons@4.5.5/dist/ionicons.js"></script>
    <script src="scripts/modernizr.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>

    <!-- Preloader -->
    <div id="preloader">
        <div class="pre-container">
            <div class="spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
            </div>
        </div>
    </div>
    <!-- end Preloader -->

    <div class="container-fluid">
        <!-- box header -->
        <header class="box-header">
            <div class="box-logo">
                <!--
                   -<a href="index.html"><img src="img/logo.png" width="80" alt="Logo"></a>
		   -->
                <a href="index.html">
                    <h3>Nicholas Chiang<span>.</span></h3>
                </a>
            </div>
            <!-- box-nav -->
            <a class="box-primary-nav-trigger" href="#0">
                <span class="box-menu-text">Menu</span><span class="box-menu-icon"></span>
            </a>
            <!-- box-primary-nav-trigger -->
        </header>
        <!-- end box header -->

        <!-- nav -->
        <nav>
            <ul class="box-primary-nav">
                <li class="box-label">About me</li>

                <li><a href="index.html">Intro</a> <i class="ion-ios-circle-filled color"></i></li>
                <!--
                   -<li><a href="https://sing.stanford.edu/site/publications/hack-lctes19.pdf">Papers</a></li>
		   -->
                <li><a href="publications.html">Papers</a></li>
                <li><a href="resume.pdf">resume</a></li>
                <!--
                   -<li><a href="contact.html">contact me</a></li>
		   -->



                <li class="box-label">Follow me</li>

                <li class="box-social"><a href="#0">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a></li>
                <li class="box-social"><a href="#0">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a></li>
                <!--
                   -<li class="box-social"><a href="#0">
                   -        <ion-icon name="logo-twitter"></ion-icon>
                   -    </a></li>
		   -->
                <li class="box-social"><a href="https://github.com/nicholaschiang/">
                        <ion-icon name="logo-github"></ion-icon>
                    </a></li>
                <li class="box-social"><a href="https://scholar.google.com/citations?user=BNFc5p8AAAAJ">
                        <ion-icon name="school"></ion-icon>
                    </a></li>
            </ul>
        </nav>
        <!-- end nav -->

        <!-- box-intro -->
        <section class="box-intro">
            <div class="table-cell">
                <h1 class="box-headline letters rotate-2">
                    <span class="box-words-wrapper">
                        <b class="is-visible">code.</b>
                        <b>&nbsp;&nbsp;&nbsp;film.</b>
                        <b>photo.</b>
                    </span>
                </h1>
                <h5>full website coming soon</h5>
            </div>

            <div class="mouse">
                <div class="scroll"></div>
            </div>
        </section>
        <!-- end box-intro -->
    </div>

    <!--
   -    [> portfolio div <]
   -    <div class="portfolio-div">
   -        <div class="portfolio">
   -            <div class="no-padding portfolio_container">
   -                [> single work <]
   -                <div class="col-md-3 col-sm-6  fashion logo">
   -                    <a href="single-project.html" class="portfolio_item">
   -                        <img src="http://placehold.it/1000x1000" alt="image" class="img-responsive" />
   -                        <div class="portfolio_item_hover">
   -                            <div class="portfolio-border clearfix">
   -                                <div class="item_info">
   -                                    <span>Electric Commutes</span>
   -                                    <em>Tech / Lifestyle</em>
   -                                </div>
   -                            </div>
   -                        </div>
   -                    </a>
   -                </div>
   -                [> end single work <]
   -
   -                [> single work <]
   -                <div class="col-md-3 col-sm-6 ads graphics">
   -                    <a href="single-project.html" class="portfolio_item">
   -                        <img src="http://placehold.it/1000x1000" alt="image" class="img-responsive" />
   -                        <div class="portfolio_item_hover">
   -                            <div class="portfolio-border clearfix">
   -                                <div class="item_info">
   -                                    <span>Floating mockups</span>
   -                                    <em>Ads / Graphics</em>
   -                                </div>
   -                            </div>
   -                        </div>
   -                    </a>
   -                </div>
   -                [> end single work <]
   -
   -                [> single work <]
   -                <div class="col-md-6 col-sm-12 photography">
   -                    <a href="single-project.html" class="portfolio_item">
   -                        <img src="http://placehold.it/1000x1000" alt="image" class="img-responsive" />
   -                        <div class="portfolio_item_hover">
   -                            <div class="portfolio-border clearfix">
   -                                <div class="item_info">
   -                                    <span>Photorealistic smartwatch</span>
   -                                    <em>Photography</em>
   -                                </div>
   -                            </div>
   -                        </div>
   -                    </a>
   -                </div>
   -                [> end single work <]
   -
   -                [> single work <]
   -                <div class="col-md-3 col-sm-6 fashion ads">
   -                    <a href="single-project.html" class="portfolio_item">
   -                        <img src="http://placehold.it/1000x1000" alt="image" class="img-responsive" />
   -                        <div class="portfolio_item_hover">
   -                            <div class="portfolio-border clearfix">
   -                                <div class="item_info">
   -                                    <span>Held by hands</span>
   -                                    <em>Fashion / Ads</em>
   -                                </div>
   -                            </div>
   -                        </div>
   -                    </a>
   -                </div>
   -                [> end single work <]
   -
   -                [> single work <]
   -                <div class="col-md-3 col-sm-6 graphics ads">
   -                    <a href="single-project.html" class="portfolio_item">
   -                        <img src="http://placehold.it/1000x1000" alt="image" class="img-responsive" />
   -                        <div class="portfolio_item_hover">
   -                            <div class="portfolio-border clearfix">
   -                                <div class="item_info">
   -                                    <span>Mobile devices</span>
   -                                    <em>Graphics / Ads</em>
   -                                </div>
   -                            </div>
   -                        </div>
   -                    </a>
   -                </div>
   -                [> end single work <]
   -
   -                [> single work <]
   -                <div class="col-md-6 col-sm-12 photography">
   -                    <a href="single-project.html" class="portfolio_item">
   -                        <img src="http://placehold.it/1000x1000" alt="image" class="img-responsive" />
   -                        <div class="portfolio_item_hover">
   -                            <div class="portfolio-border clearfix">
   -                                <div class="item_info">
   -                                    <span>Photorealistic smartwatch</span>
   -                                    <em>Photography</em>
   -                                </div>
   -                            </div>
   -                        </div>
   -                    </a>
   -                </div>
   -                [> end single work <]
   -
   -                [> single work <]
   -                <div class="col-md-3 col-sm-6 graphics ads">
   -                    <a href="single-project.html" class="portfolio_item">
   -                        <img src="http://placehold.it/1000x1000" alt="image" class="img-responsive" />
   -                        <div class="portfolio_item_hover">
   -                            <div class="portfolio-border clearfix">
   -                                <div class="item_info">
   -                                    <span>Mobile devices</span>
   -                                    <em>Graphics / Ads</em>
   -                                </div>
   -                            </div>
   -                        </div>
   -                    </a>
   -                </div>
   -                [> end single work <]
   -
   -                [> single work <]
   -                <div class="col-md-3 col-sm-6 graphics ads">
   -                    <a href="single-project.html" class="portfolio_item">
   -                        <img src="http://placehold.it/1000x1000" alt="image" class="img-responsive" />
   -                        <div class="portfolio_item_hover">
   -                            <div class="portfolio-border clearfix">
   -                                <div class="item_info">
   -                                    <span>Mobile devices</span>
   -                                    <em>Graphics / Ads</em>
   -                                </div>
   -                            </div>
   -                        </div>
   -                    </a>
   -                </div>
   -                [> end single work <]
   -
   -                [> single work <]
   -                <div class="col-md-3 col-sm-6 graphics ads">
   -                    <a href="single-project.html" class="portfolio_item">
   -                        <img src="http://placehold.it/1000x1000" alt="image" class="img-responsive" />
   -                        <div class="portfolio_item_hover">
   -                            <div class="portfolio-border clearfix">
   -                                <div class="item_info">
   -                                    <span>Mobile devices</span>
   -                                    <em>Graphics / Ads</em>
   -                                </div>
   -                            </div>
   -                        </div>
   -                    </a>
   -                </div>
   -                [> end single work <]
   -
   -                [> single work <]
   -                <div class="col-md-3 col-sm-6 graphics ads">
   -                    <a href="single-project.html" class="portfolio_item">
   -                        <img src="http://placehold.it/1000x1000" alt="image" class="img-responsive" />
   -                        <div class="portfolio_item_hover">
   -                            <div class="portfolio-border clearfix">
   -                                <div class="item_info">
   -                                    <span>Mobile devices</span>
   -                                    <em>Graphics / Ads</em>
   -                                </div>
   -                            </div>
   -                        </div>
   -                    </a>
   -                </div>
   -                [> end single work <]
   -            </div>
   -            [> end portfolio_container <]
   -        </div>
   -        [> portfolio <]
   -    </div>
   -    [> end portfolio div <]
   -->


    <ul class="mdc-image-list mdc-image-list--masonry">
        <li class="mdc-image-list__item">
            <img class="mdc-image-list__image" id="golden-gate" alt="Golden Gate Beach" src="/photos/Golden Gate.png" />
        </li>
        <li class="mdc-image-list__item">
            <img class="mdc-image-list__image" id="water-flying" alt="Water Flying" src="/photos/Water Flying.png" />
        </li>
        <li class="mdc-image-list__item">
            <img class="mdc-image-list__image" id="teen-graffiti" alt="Teen Graffiti" src="/photos/Sophia Portrait.png" />
        </li>
        <li class="mdc-image-list__item">
            <img class="mdc-image-list__image" id="sunset-chairlift" alt="Sunset Chairlift" src="/photos/Sunset Chairlift.png" />
        </li>
        <li class="mdc-image-list__item">
            <img class="mdc-image-list__image" id="flying-water" alt="Flying Water" src="/photos/Flying Water.png" />
        </li>
        <li class="mdc-image-list__item">
            <img class="mdc-image-list__image" id="flower-macro" alt="Flower Macro" src="/photos/Flower Macro.png" />
        </li>
        <li class="mdc-image-list__item">
            <img class="mdc-image-list__image" id="children-exploring" alt="Children Exploring" src="/photos/Jacquelyn with Grace.png" />
        </li>
        <li class="mdc-image-list__item">
            <img class="mdc-image-list__image" id="pinecone-branch" alt="Pinecone Branch" src="/photos/Pinecone Branch.png" />
        </li>
        <li class="mdc-image-list__item">
            <img class="mdc-image-list__image" id="teen-leans-in" alt="Teen Leans In" src="/photos/Sophia Leans Away.png" />
        </li>
        <li class="mdc-image-list__item">
            <img class="mdc-image-list__image" id="teen-looks-out" alt="Teen Looks Out" src="/photos/Sophia Looks Out.png" />
        </li>
    </ul>

    <!-- MDC Responsive Layout Grid for photos and videos -->
    <!--
       -<div class="mdc-layout-grid">
       -    <div class="mdc-layout-grid__inner">
       -        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
       -            <img id="water-flying" alt="Water Flying" src="/photos/Water Flying.png" />
       -        </div>
       -        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
       -            <img id="flying-water" alt="Flying Water" src="/photos/Flying Water.png" />
       -        </div>
       -        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
       -            <img id="golden-gate" alt="Golden Gate Beach" src="/photos/Golden Gate.png" />
       -        </div>
       -        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
       -            <video id="player" playsinline controls>
       -                <source src="https://drive.google.com/file/d/16EVWoqh0HmmFKZzkIE65Qjw0DNFOeaZN/preview" type="video/mp4" />
       -            </video>
       -        </div>
       -        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
       -            <video poster="/vid/vid1_poster.png" id="player" playsinline controls>
       -                <source src="/vid/vid1.mp4" type="video/mp4" />
       -            </video>
       -        </div>
       -        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
       -            <video poster="/vid/vid2_poster.png" id="player" playsinline controls>
       -                <source src="/vid/vid2.mp4" type="video/mp4" />
       -            </video>
       -        </div>
       -    </div>
       -</div>
       -->

    <!-- footer -->
    <footer>
        <div class="container-fluid">
            <p class="copyright">© Nicholas Chiang 2019</p>
        </div>
    </footer>
    <!-- end footer -->

    <!-- back to top -->
    <!--
       -<a href="#0" class="cd-top">
       -    <ion-icon name="arrow-up"></ion-icon>
       -</a>
       -->
    <!-- end back to top -->




    <!-- jQuery -->
    <script src="scripts/jquery-2.1.1.js"></script>
    <!--  plugins -->
    <script src="scripts/bootstrap.min.js"></script>
    <script src="scripts/menu.js"></script>
    <script src="scripts/animated-headline.js"></script>
    <script src="scripts/isotope.pkgd.min.js"></script>


    <!--  custom script -->
    <script src="scripts/custom.js"></script>
    <script src="scripts/bundle.min.js"></script>

</body>

</html>""