var documentationIndex;
  javadocPackageIndex,
  javadocClassIndex,
  javadocMemberIndex;

function search(query, output) {
  var docQuery = documentationIndex.search(query).map(function(i) {
      return `<li class="search-result-index"><a href="${i.item.url}"><h2 class="search-result-title">${i.item.title}</h2><p class="search-result-content">${i.item.content}</p></a></li>`;
    });
        
      packageQuery = javadocPackageIndex.search(query).map(function(i) {
        return `<li class="search-result-index"><a href="${i.item.url}"><h2 class="search-result-title">${i.item.name}</h2></a></li>`;
      }),
      classQuery = javadocClassIndex.search(query).map(function(i) {
        return `<li class="search-result-index"><a href="${i.item.url}"><h2 class="search-result-title">${i.item.name}</h2></a></li>`;
      }),
      memberQuery = javadocMemberIndex.search(query).map(function(i) {
        return `<li class="search-result-index"><a href="${i.item.url}"><h2 class="search-result-title">${i.item.name}</h2></a></li>`;
      });
  // clear results list
  output.empty();
  // documentation
  output.append(`<div class="search-result">
    <h1 class="search-result-header">Documentation</h1>
      ${(docQuery.length != 0) ? '<ul class="search-result-list">' + docQuery.join("") + '</ul>' : '<p class="info">No results.<p>'}
    </div>`);
  // javadoc package
  output.append(`<div class="search-result">
    <h1 class="search-result-header">Javadoc Packages</h1>
      ${(packageQuery.length != 0) ? '<ul class="search-result-list">' + packageQuery.join("") + '</ul>' : '<p class="info">No results.<p>'}
    </div>`);
  // javadoc class
  output.append(`<div class="search-result">
    <h1 class="search-result-header">Javadoc Classes</h1>
      ${(classQuery.length != 0) ? '<ul class="search-result-list">' + classQuery.join("") + '</ul>' : '<p class="info">No results.<p>'}
    </div>`);
  // javadoc members
  output.append(`<div class="search-result">
    <h1 class="search-result-header">Javadoc Members</h1>
      ${(memberQuery.length != 0) ? '<ul class="search-result-list">' + memberQuery.join("") + '</ul>' : '<p class="info">No results.<p>'}
    </div>`);
}

function createIndex() {
  var javadocUrl = "{{ "/javadoc/" | relURL }}";
  
  $.getScript(javadocUrl + "package-search-index.js", function() {
    javadocPackageIndex = new Fuse(packageSearchIndex.filter(function(p){ return p.l != "All Packages" }).map(function(p) { return {
      name: p.l,
      type: "package",
      url: javadocUrl + p.l.replaceAll(".", "/") + "/package-summary.html"
    } }), {
      keys: ["name"],
      useExtendedSearch: true,
      includeMatches: true,
      shouldSort: true
    });

  });
  $.getScript(javadocUrl + "type-search-index.js", function() {
    javadocClassIndex = new Fuse(typeSearchIndex.filter(function(c){ return c.l != "All Classes" }).map(function(c) {
      return {
        name: c.p + "." + c.l,
        type: "class",
        url: javadocUrl + c.p.replaceAll(".", "/") + "/" + c.l + ".html"
      }
    }), {
      keys: ["name"],
      useExtendedSearch: true,
      includeMatches: true,
      shouldSort: true
    });
  });
  $.getScript(javadocUrl + "member-search-index.js", function() {
    javadocMemberIndex = new Fuse(memberSearchIndex.map(function(m) {
      var suffix = (m.url) ? m.url : m.l
      return {
        name: m.p + "." + m.c + "#" + m.l,
        type: "member",
        url: javadocUrl + m.p.replaceAll(".", "/") + "/" + m.c + ".html#" + suffix
      }
    }), {
      keys: ["name"],
      useExtendedSearch: true,
      includeMatches: true,
      shouldSort: true
    });
  });

  $.getJSON("{{ "/api/docs.json" | relURL }}", function(data) {
    documentationIndex = new Fuse(data,  {
      keys: [
        {name: "title", weight: 0.8},
        {name: "content", weight: 0.5},
        {name: "tags", weight: 0.3}
      ],
      useExtendedSearch: true,
      includeMatches: true,
      shouldSort: true
    });
  });
}