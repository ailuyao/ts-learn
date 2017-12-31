/// <reference path="../../tools/typings/jquery/index.d.ts" />
/// <reference path="../../tools/typings/lodash/index.d.ts" />

const delegateEventSplitter = /^(\S+)\s*(.*)$/;
const viewOptions = ['$el', 'events'];

class BaseComponent {
  private $el: JQuery;

  constructor(options: {}) {
    this.$el = $('.root');
    _.extend(this, _.pick(options, viewOptions));
  }
  delegateEvents(events?: Event) {
    events || (events = _.result(this, 'events'));
    if (!events) {
      return this;
    }
    this.undelegateEvents();
    for (const key in events) {
      let method = events[key];
      if (!_.isFunction(method)) {
        method = this[method];
      }
      if (!method) {
        continue;
      }
      const match = key.match(delegateEventSplitter) || [];
      this.delegate(match[1], match[2], _.bind(method, this));
    }
    return this;
  }

  delegate(eventName: string, selector: string, listener: VoidFunction) {
    this.$el.on(`${eventName}.delegateEvents`, selector, listener);
    return this;
  }

  undelegateEvents() {
    if (this.$el) {
      this.$el.off('.delegateEvents');
    }
    return this;
  }

  undelegate(eventName: string, selector: string, listener: VoidFunction) {
    this.$el.off(`${eventName}.delegateEvents`, selector, listener);
    return this;
  }

  destroy() {
    this.undelegateEvents();
  }

  beforeRender(el: Element) {
    this.$el = $(el);
    this.undelegateEvents();
    this.delegateEvents();
  }
}
