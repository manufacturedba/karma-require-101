define(function() {
  return {
    unescapeHtml: function _unescapeHtml(safe) {
      return safe
        .replace("&amp;", /&/g)
        .replace("&lt;", /</g)
        .replace( "&gt;", />/g)
        .replace("&quot;", /"/g)
        .replace("&#039;", /'/g);
    }
  };
});