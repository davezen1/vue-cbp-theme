<template>
<div role="navigation" class="cbp-header">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="../">
              <span class="visible-md visible-lg"><span class="cbp-brand">U.S. Customs &amp; Border Protection</span></span>
              <span class="visible-xs visible-sm"><span class="cbp-brand">U.S. CBP</span></span>
              <span class="visible-md visible-lg"><span class="dhs-brand">U.S. Department of Homeland Security</span></span>
            </a>
                    <button data-target="#navbar-user-info" data-toggle="collapse" type="button" class="navbar-toggle">
                        <span class="sr-only">Toggle Global Navigation</span>
                    </button>
                </div>
                <div id="navbar-user-info" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-left">
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" role="button" href="#">
                  {{appName}}<span class="caret"></span> <!-- Your application name goes here!!!-->
                </a>
                            <ul class="dropdown-menu" id="nav-menu">
                                <li class="dropdown-header" rel="recent">Recent Apps</li>
                                <li rel="recent"><a href="#"><span title="Remove from Recent Apps" tabindex="0" class="fa fa-times fa-fw">&nbsp;&nbsp;&nbsp;</span><span>Recent App 1</span></a></li>
                                <li rel="recent"><a href="#"><span title="Remove from Recent Apps" tabindex="0" class="fa fa-times fa-fw">&nbsp;&nbsp;&nbsp;</span><span>Recent App 2</span></a></li>
                                <li rel="recent"><a href="#"><span title="Remove from Recent Apps" tabindex="0" class="fa fa-times fa-fw">&nbsp;&nbsp;&nbsp;</span><span>Recent App 3</span></a></li>
                                <li rel="recent"><a href="#"><span title="Remove from Recent Apps" tabindex="0" class="fa fa-times fa-fw">&nbsp;&nbsp;&nbsp;</span><span>Recent App 4</span></a></li>
                                <li rel="recent"><a href="#"><span title="Remove from Recent Apps" tabindex="0" class="fa fa-times fa-fw">&nbsp;&nbsp;&nbsp;</span><span>Recent App 5</span></a></li>
                                <li class="divider" rel="recent"></li>
                                <li rel="search_input">
                                    <input class="form-control input-md" placeholder="Search..." style="border: none; text-indent: 7px; box-shadow: none; outline: none">
                                </li>
                                <li class="divider"></li>
                                <li><a href="/">See All Available Apps...</a></li>
                                <li rel="refreshMenujs"><a href="#">Refresh</a></li>
                                <li class="dropdown-header">
                                    <p class="pull-right">Updated 9/27/17 08:48:57</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="#">
                  <span class="fa fa-comment"></span>
                  <span class="hidden-sm">Feedback</span>
                </a>
                        </li>
                        <li data-toggle="hover" class="dropdown">
                            <a href="#" data-toggle="dropdown" class="dropdown-toggle">
                  <span class="fa fa-user"></span>
                  <span class="hidden-sm" title="FIRST.LAST@CBP.DHS.GOV">First Last Name</span>
                  <span class="caret"></span>
                </a>
                            <ul rel="right-menu-links" role="menu" class="dropdown-menu">
                                <li>
                                    <a title="Preferences" href="#">Preferences</a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a title="Logout" href="#">Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
    </div>


    
</template>


<script>
export default {
  name: "Header",
  props: {
    appName: String
  }
};
</script>