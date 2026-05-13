var React =  require('react');

var AccordionElement =  React.createClass({displayName: "AccordionElement",
  
  propTypes: {
    title: React.PropTypes.string,
    clickCallback: React.PropTypes.func,
    content: React.PropTypes.string
  },

  getInitialState: function() {
    return {collapsed: true}
  },

  _expand: function() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  },

  render: function() {
    
    var elementBodyStyle = {
      display: this.state.collapsed ? 'none' : 'block',
      height: this.state.collapsed ? '0' : '5rem'
    };
    return (
      React.createElement("div", {className: "accordion-element"}, 
        React.createElement("div", {className: "accordion-element-header"}, 
          React.createElement("div", {className: "left-part", onClick: this._expand}, 
            this.state.collapsed ? '\u25c9' : '\u25ce'
          ), 
          React.createElement("div", {className: "right-part", onClick: this.props.clickCallback}, 
            React.createElement("h4", null, this.props.title)
          )
        ), 
        React.createElement("div", {className: "accordion-element-body", style: elementBodyStyle}, 
          React.createElement("div", null, this.props.content)
        )
      )
    );
  }

});

/* Accordion element list */
var Accordion = React.createClass({displayName: "Accordion",

  propTypes: {
    elements: React.PropTypes.arrayOf(React.PropTypes.object)  
  },

  render: function() {
    var accordionElements = this.props.elements.map(function(e, i) {
       return React.createElement(AccordionElement, {key: i, clickCallback: e.onClick, title: e.title, content: e.content})
    });
    
    return (
      React.createElement("div", {className: "accordion-wrapper"}, 
        accordionElements
      )
    );
  }

});

module.exports = Accordion;
