import React from "react";
import PropTypes from "prop-types";

const CountField = ({ label, name, value, onChange, error }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="input-group mb-3">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input
                    type="count"
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className="form-control border border-warning"
                    style={{ background: "#dee2e6" }}
                    placeholder={name}
                />
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

CountField.defaultProps = {
    type: "count"
};

CountField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default CountField;
