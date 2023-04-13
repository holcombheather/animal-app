import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


class FilterForm extends Component {
    render() {
        return (
            <Form.Select aria-label="Default select example" onChange={this.props.onFilter}>
                <option>Unfiltered</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
            </Form.Select>
        )
    }
}

export default FilterForm;
    