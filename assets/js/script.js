const toggler = jQuery(".navbar #toggler .fas");
const body = jQuery("body");
const navbar = jQuery(".navbar");

if (window.localStorage.getItem("dark-mode") == 'true') {
  body.toggleClass("dark-mode");
  navbar.toggleClass("navbar-dark");
  toggler.addClass("fa-moon");
} else {
  navbar.toggleClass("navbar-light");
  toggler.addClass("fa-sun");
}

function resolveAlerts() {
  var alertLink = $(".alert a"),
    alertHeading = $(".alert h*");

  if (!alertLink.hasClass("alert-link")) alertLink.toggleClass("alert-link");
  if (!alertHeading.hasClass("alert-heading")) alertHeading.toggleClass("alert-heading");
}

function codeTabs() {
  $('.tab-content').find('.tab-pane').each(function (idx, item) {
    var navTabs = $(this).closest('.code-tabs').find('.nav-tabs'),
      title = $(this).attr('title');

    navTabs.append('<li class="nav-item" title="'+ title +'"><a class="nav-link" href="#">' + title + '</a></li>');
  });

  updateCodeTab();

  $('.code-tabs .nav-tabs a').on("click", function (e) {
    e.preventDefault();
    var tab = $(this).parent(),
      name = tab.attr('title'),
      tabIndex = tab.index(),
      tabPanel = $(this).closest('.code-tabs'),
      tabPane = tabPanel.find('.tab-pane').eq(tabIndex);
    tabPanel.find('.active').removeClass('active');
    tab.addClass('active');
    tabPane.addClass('active');

    if (window.localStorage) {
      window.localStorage.setItem("language-tab", name);
    }

    updateCodeTab();
  });
}

function updateCodeTab() {
  var tabDefaultLang = "Java"

  if (window.localStorage.getItem("language-tab")) {
    var tabDefaultLang = window.localStorage.getItem("language-tab");
  }
  $('.code-tabs').find('.active').removeClass('active');

  $('.code-tabs ul.nav-tabs').find("li[title=" + tabDefaultLang + "]").addClass('active');
  $('.code-tabs ul.nav-tabs').find("li[title=" + tabDefaultLang + "] a").addClass('active');
  $('.code-tabs .tab-content').find("div[title=" + tabDefaultLang + "]").addClass('active');
}

function buildTabs() {
  $('.tab-content').find('.tab-pane').each(function (idx, item) {
    var navTabs = $(this).closest('.build-tabs').find('.nav-tabs'),
      name = $(this).attr('name'),
      title = $(this).attr('title'),
      icon = {
        gradle: "{{ "/assets/images/gradle.svg" | relURL }}",
        kotlin: "{{ "/assets/images/kotlin.svg" | relURL }}",
        pom: "{{ "/assets/images/maven.svg" | relURL }}"
      };
      navTabs.append('<li class="nav-item" name="'+ name +'"><a class="nav-link" href="#"><img class="nav-icon" src="' + icon[name] + '" />' + title + '</a></li>');
  });

  updateBuildTab();

  $('.build-tabs .nav-tabs a').on("click", function (e) {
      e.preventDefault();
    var tab = $(this).parent(),
      name = tab.attr('name'),
      tabIndex = tab.index(),
      tabPanel = $(this).closest('.build-tabs'),
      tabPane = tabPanel.find('.tab-pane').eq(tabIndex);
    tabPanel.find('.active').removeClass('active');
    tab.addClass('active');
    tabPane.addClass('active');

    if (window.localStorage) {
      window.localStorage.setItem("build-tab", name);
    }

    updateBuildTab();
  });
}

function updateBuildTab() {
  var tabDefaultBuild = "gradle"

  if (window.localStorage.getItem("build-tab")) {
    var tabDefaultBuild = window.localStorage.getItem("build-tab");
  }

  $('.build-tabs').find('.active').removeClass('active');

  $('.build-tabs ul.nav-tabs').find("li[name=" + tabDefaultBuild + "]").addClass('active');
  $('.build-tabs ul.nav-tabs').find("li[name=" + tabDefaultBuild + "] a").addClass('active');
  $('.build-tabs .tab-content').find("div[name=" + tabDefaultBuild + "]").addClass('active');
}

function darkToggle() {
  if(body.hasClass("dark-mode")) {
    body.removeClass("dark-mode");
    window.localStorage.setItem("dark-mode", false);
    toggler.removeClass("fa-moon");
    toggler.addClass("fa-sun");
    navbar.toggleClass("navbar-light");
    navbar.toggleClass("navbar-dark");
  } else {
    body.addClass("dark-mode");
    window.localStorage.setItem("dark-mode", true);
    toggler.removeClass("fa-sun");
    toggler.addClass("fa-moon");
    navbar.toggleClass("navbar-light");
    navbar.toggleClass("navbar-dark");
  }
}

$(function() {
  codeTabs();
  buildTabs();
  resolveAlerts();
  createIndex();
  $(".tab-pane").each(function() {
    var parent = $(this).parent(),
      title = $(this).attr('title');

    if (!parent.hasClass("tab-content")) {
      $(this).find("div.highlight pre").before('<p class="code-title">' + title + '</p>');
    }
  });

  toggler.parent().on("click", darkToggle);
  
  var searchRoot = $(".search"),
    input = searchRoot.find(".search-input"),
    output = searchRoot.find(".search-output");
  
  input.on("keyup", function() {
    var query = $(this).val();
    if (query.split(' ').findIndex(function(w) { return w.length > 2 }) > -1) {
      search(query, output);
    } else if (query.length == 0) {
      output.html(`<p class="info">Type your query to search.<p>`);
    } else {
      output.html(`<p class="info">Word must have a minimum 3 charaters (without a space).<p>`);
    }
  })
  $(this).on("click", function(event) {
    var container = searchRoot.children(".search-inner");

    if (!container.is(event.target) && container.has(event.target).length === 0) {
      searchRoot.removeClass("active");
      body.removeAttr("style");
    }

    if (input.is(event.target)) {
      searchRoot.addClass("active");
      body.css("overflow", "hidden");
    }
  });
  $.getJSON("https://api.github.com/repos/{{ .Param "github" }}/releases/latest", function(body) {   
    $(".release").text(body.tag_name);
    $(".version_release").text(body.tag_name.substring(1));
  });

  $("#Navigation .parent .fas").on("click", function() {
    $(this).toggleClass("fa-caret-right fa-caret-down");
    $(this).closest(".parent").children("ul").toggle(250, "linear");
  });

  $(this).parent("#Navigation .parent").children("ul").toggle();
  
  var btt = $("#back-to-top").first();

  $(window).on("scroll", function() {
    var top = $(this).scrollTop();
    if (top > 100) {
      btt.fadeIn("slow", "linear");
    } else if (top < 100) {
      btt.fadeOut("slow", "linear");
    }
  });
});