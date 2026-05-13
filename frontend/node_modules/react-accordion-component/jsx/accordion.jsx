var React =  require('react');

var AccordionElement =  React.createClass({
  
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
      <div className='accordion-element'>
        <div className='accordion-element-header'>
          <div className='left-part' onClick={this._expand}>
            {this.state.collapsed ? '\u25c9' : '\u25ce'}
          </div>
          <div className='right-part' onClick={this.props.clickCallback}>
            <h4>{this.props.title}</h4>
          </div>
        </div>
        <div className='accordion-element-body' style={elementBodyStyle}>
          <div>{this.props.content}</div>
        </div> 
      </div>
    );
  }

});

/* Accordion element list */
var Accordion = React.createClass({

  propTypes: {
    elements: React.PropTypes.arrayOf(React.PropTypes.object)  
  },

  render: function() {
    var accordionElements = this.props.elements.map(function(e, i) {
       return <AccordionElement key={i} clickCallback={e.onClick} title={e.title} content={e.content}/>
    });
    
    return (
      <div className='accordion-wrapper'>
        {accordionElements}
      </div>
    );
  }

});

module.exports = Accordion;
