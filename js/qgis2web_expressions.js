// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_Litologia_10rule0_eval_expression(context) {
    // SIGLA_UNID = 'A3is'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'A3is');
    } else {
        return (feature['SIGLA_UNID']  == 'A3is');
    }
}


function exp_Litologia_10rule1_eval_expression(context) {
    // SIGLA_UNID = 'A3lg'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'A3lg');
    } else {
        return (feature['SIGLA_UNID']  == 'A3lg');
    }
}


function exp_Litologia_10rule2_eval_expression(context) {
    // SIGLA_UNID = 'A3lo'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'A3lo');
    } else {
        return (feature['SIGLA_UNID']  == 'A3lo');
    }
}


function exp_Litologia_10rule3_eval_expression(context) {
    // SIGLA_UNID = 'A3lq'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'A3lq');
    } else {
        return (feature['SIGLA_UNID']  == 'A3lq');
    }
}


function exp_Litologia_10rule4_eval_expression(context) {
    // SIGLA_UNID = 'A4se'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'A4se');
    } else {
        return (feature['SIGLA_UNID']  == 'A4se');
    }
}


function exp_Litologia_10rule5_eval_expression(context) {
    // SIGLA_UNID = 'C2bb'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'C2bb');
    } else {
        return (feature['SIGLA_UNID']  == 'C2bb');
    }
}


function exp_Litologia_10rule6_eval_expression(context) {
    // SIGLA_UNID = 'C2bm'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'C2bm');
    } else {
        return (feature['SIGLA_UNID']  == 'C2bm');
    }
}


function exp_Litologia_10rule7_eval_expression(context) {
    // SIGLA_UNID = 'Cc'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'Cc');
    } else {
        return (feature['SIGLA_UNID']  == 'Cc');
    }
}


function exp_Litologia_10rule8_eval_expression(context) {
    // SIGLA_UNID = 'ENb'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'ENb');
    } else {
        return (feature['SIGLA_UNID']  == 'ENb');
    }
}


function exp_Litologia_10rule9_eval_expression(context) {
    // SIGLA_UNID = 'J3pb'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'J3pb');
    } else {
        return (feature['SIGLA_UNID']  == 'J3pb');
    }
}


function exp_Litologia_10rule10_eval_expression(context) {
    // SIGLA_UNID = 'JKs'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'JKs');
    } else {
        return (feature['SIGLA_UNID']  == 'JKs');
    }
}


function exp_Litologia_10rule11_eval_expression(context) {
    // SIGLA_UNID = 'K1bi'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'K1bi');
    } else {
        return (feature['SIGLA_UNID']  == 'K1bi');
    }
}


function exp_Litologia_10rule12_eval_expression(context) {
    // SIGLA_UNID = 'K1cc'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'K1cc');
    } else {
        return (feature['SIGLA_UNID']  == 'K1cc');
    }
}


function exp_Litologia_10rule13_eval_expression(context) {
    // SIGLA_UNID = 'K1p'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'K1p');
    } else {
        return (feature['SIGLA_UNID']  == 'K1p');
    }
}


function exp_Litologia_10rule14_eval_expression(context) {
    // SIGLA_UNID = 'K1pe'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'K1pe');
    } else {
        return (feature['SIGLA_UNID']  == 'K1pe');
    }
}


function exp_Litologia_10rule15_eval_expression(context) {
    // SIGLA_UNID = 'K1ra'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'K1ra');
    } else {
        return (feature['SIGLA_UNID']  == 'K1ra');
    }
}


function exp_Litologia_10rule16_eval_expression(context) {
    // SIGLA_UNID = 'K1rm'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'K1rm');
    } else {
        return (feature['SIGLA_UNID']  == 'K1rm');
    }
}


function exp_Litologia_10rule17_eval_expression(context) {
    // SIGLA_UNID = 'K1rt'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'K1rt');
    } else {
        return (feature['SIGLA_UNID']  == 'K1rt');
    }
}


function exp_Litologia_10rule18_eval_expression(context) {
    // SIGLA_UNID = 'K1ss'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'K1ss');
    } else {
        return (feature['SIGLA_UNID']  == 'K1ss');
    }
}


function exp_Litologia_10rule19_eval_expression(context) {
    // SIGLA_UNID = 'K1sv'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'K1sv');
    } else {
        return (feature['SIGLA_UNID']  == 'K1sv');
    }
}


function exp_Litologia_10rule20_eval_expression(context) {
    // SIGLA_UNID = 'K2ca'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'K2ca');
    } else {
        return (feature['SIGLA_UNID']  == 'K2ca');
    }
}


function exp_Litologia_10rule21_eval_expression(context) {
    // SIGLA_UNID = 'K2cta'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'K2cta');
    } else {
        return (feature['SIGLA_UNID']  == 'K2cta');
    }
}


function exp_Litologia_10rule22_eval_expression(context) {
    // SIGLA_UNID = 'K2cts'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'K2cts');
    } else {
        return (feature['SIGLA_UNID']  == 'K2cts');
    }
}


function exp_Litologia_10rule23_eval_expression(context) {
    // SIGLA_UNID = 'NP12mg'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP12mg');
    } else {
        return (feature['SIGLA_UNID']  == 'NP12mg');
    }
}


function exp_Litologia_10rule24_eval_expression(context) {
    // SIGLA_UNID = 'NP12mmr'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP12mmr');
    } else {
        return (feature['SIGLA_UNID']  == 'NP12mmr');
    }
}


function exp_Litologia_10rule25_eval_expression(context) {
    // SIGLA_UNID = 'NP12mms'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP12mms');
    } else {
        return (feature['SIGLA_UNID']  == 'NP12mms');
    }
}


function exp_Litologia_10rule26_eval_expression(context) {
    // SIGLA_UNID = 'NP12mq'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP12mq');
    } else {
        return (feature['SIGLA_UNID']  == 'NP12mq');
    }
}


function exp_Litologia_10rule27_eval_expression(context) {
    // SIGLA_UNID = 'NP12mrma'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP12mrma');
    } else {
        return (feature['SIGLA_UNID']  == 'NP12mrma');
    }
}


function exp_Litologia_10rule28_eval_expression(context) {
    // SIGLA_UNID = 'NP12mrmi'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP12mrmi');
    } else {
        return (feature['SIGLA_UNID']  == 'NP12mrmi');
    }
}


function exp_Litologia_10rule29_eval_expression(context) {
    // SIGLA_UNID = 'NP12mrmia'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP12mrmia');
    } else {
        return (feature['SIGLA_UNID']  == 'NP12mrmia');
    }
}


function exp_Litologia_10rule30_eval_expression(context) {
    // SIGLA_UNID = 'NP12mrmim'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP12mrmim');
    } else {
        return (feature['SIGLA_UNID']  == 'NP12mrmim');
    }
}


function exp_Litologia_10rule31_eval_expression(context) {
    // SIGLA_UNID = 'NP12mrml'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP12mrml');
    } else {
        return (feature['SIGLA_UNID']  == 'NP12mrml');
    }
}


function exp_Litologia_10rule32_eval_expression(context) {
    // SIGLA_UNID = 'NP12mu'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP12mu');
    } else {
        return (feature['SIGLA_UNID']  == 'NP12mu');
    }
}


function exp_Litologia_10rule33_eval_expression(context) {
    // SIGLA_UNID = 'NP12mxm'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP12mxm');
    } else {
        return (feature['SIGLA_UNID']  == 'NP12mxm');
    }
}


function exp_Litologia_10rule34_eval_expression(context) {
    // SIGLA_UNID = 'NP12mxs'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP12mxs');
    } else {
        return (feature['SIGLA_UNID']  == 'NP12mxs');
    }
}


function exp_Litologia_10rule35_eval_expression(context) {
    // SIGLA_UNID = 'NP1_gamma_sn'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP1_gamma_sn');
    } else {
        return (feature['SIGLA_UNID']  == 'NP1_gamma_sn');
    }
}


function exp_Litologia_10rule36_eval_expression(context) {
    // SIGLA_UNID = 'NP1ar'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP1ar');
    } else {
        return (feature['SIGLA_UNID']  == 'NP1ar');
    }
}


function exp_Litologia_10rule37_eval_expression(context) {
    // SIGLA_UNID = 'NP1pr'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP1pr');
    } else {
        return (feature['SIGLA_UNID']  == 'NP1pr');
    }
}


function exp_Litologia_10rule38_eval_expression(context) {
    // SIGLA_UNID = 'NP2_delta_2ci'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2_delta_2ci');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2_delta_2ci');
    }
}


function exp_Litologia_10rule39_eval_expression(context) {
    // SIGLA_UNID = 'NP2_delta_2cs'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2_delta_2cs');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2_delta_2cs');
    }
}


function exp_Litologia_10rule40_eval_expression(context) {
    // SIGLA_UNID = 'NP2_gamma_1c'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2_gamma_1c');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2_gamma_1c');
    }
}


function exp_Litologia_10rule41_eval_expression(context) {
    // SIGLA_UNID = 'NP2_gamma_1g'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2_gamma_1g');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2_gamma_1g');
    }
}


function exp_Litologia_10rule42_eval_expression(context) {
    // SIGLA_UNID = 'NP2cdg'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2cdg');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2cdg');
    }
}


function exp_Litologia_10rule43_eval_expression(context) {
    // SIGLA_UNID = 'NP2cdnma'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2cdnma');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2cdnma');
    }
}


function exp_Litologia_10rule44_eval_expression(context) {
    // SIGLA_UNID = 'NP2cdnmm'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2cdnmm');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2cdnmm');
    }
}


function exp_Litologia_10rule45_eval_expression(context) {
    // SIGLA_UNID = 'NP2cdnmq'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2cdnmq');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2cdnmq');
    }
}


function exp_Litologia_10rule46_eval_expression(context) {
    // SIGLA_UNID = 'NP2fpfm'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2fpfm');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2fpfm');
    }
}


function exp_Litologia_10rule47_eval_expression(context) {
    // SIGLA_UNID = 'NP2fpg'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2fpg');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2fpg');
    }
}


function exp_Litologia_10rule48_eval_expression(context) {
    // SIGLA_UNID = 'NP2fpma'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2fpma');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2fpma');
    }
}


function exp_Litologia_10rule49_eval_expression(context) {
    // SIGLA_UNID = 'NP2fpmr'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2fpmr');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2fpmr');
    }
}


function exp_Litologia_10rule50_eval_expression(context) {
    // SIGLA_UNID = 'NP2fps'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2fps');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2fps');
    }
}


function exp_Litologia_10rule51_eval_expression(context) {
    // SIGLA_UNID = 'NP2i'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2i');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2i');
    }
}


function exp_Litologia_10rule52_eval_expression(context) {
    // SIGLA_UNID = 'NP2ja'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2ja');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2ja');
    }
}


function exp_Litologia_10rule53_eval_expression(context) {
    // SIGLA_UNID = 'NP2o'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2o');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2o');
    }
}


function exp_Litologia_10rule54_eval_expression(context) {
    // SIGLA_UNID = 'NP2pa'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2pa');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2pa');
    }
}


function exp_Litologia_10rule55_eval_expression(context) {
    // SIGLA_UNID = 'NP2rfs'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2rfs');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2rfs');
    }
}


function exp_Litologia_10rule56_eval_expression(context) {
    // SIGLA_UNID = 'NP2rg'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2rg');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2rg');
    }
}


function exp_Litologia_10rule57_eval_expression(context) {
    // SIGLA_UNID = 'NP2rx'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP2rx');
    } else {
        return (feature['SIGLA_UNID']  == 'NP2rx');
    }
}


function exp_Litologia_10rule58_eval_expression(context) {
    // SIGLA_UNID = 'NP3_gamma_2cj'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP3_gamma_2cj');
    } else {
        return (feature['SIGLA_UNID']  == 'NP3_gamma_2cj');
    }
}


function exp_Litologia_10rule59_eval_expression(context) {
    // SIGLA_UNID = 'NP3_gamma_3sc'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP3_gamma_3sc');
    } else {
        return (feature['SIGLA_UNID']  == 'NP3_gamma_3sc');
    }
}


function exp_Litologia_10rule60_eval_expression(context) {
    // SIGLA_UNID = 'NP3_gamma_gx1'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP3_gamma_gx1');
    } else {
        return (feature['SIGLA_UNID']  == 'NP3_gamma_gx1');
    }
}


function exp_Litologia_10rule61_eval_expression(context) {
    // SIGLA_UNID = 'NP3_gamma_gx2'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP3_gamma_gx2');
    } else {
        return (feature['SIGLA_UNID']  == 'NP3_gamma_gx2');
    }
}


function exp_Litologia_10rule62_eval_expression(context) {
    // SIGLA_UNID = 'NP3_gamma_qg'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP3_gamma_qg');
    } else {
        return (feature['SIGLA_UNID']  == 'NP3_gamma_qg');
    }
}


function exp_Litologia_10rule63_eval_expression(context) {
    // SIGLA_UNID = 'NP3_gamma_sn'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP3_gamma_sn');
    } else {
        return (feature['SIGLA_UNID']  == 'NP3_gamma_sn');
    }
}


function exp_Litologia_10rule64_eval_expression(context) {
    // SIGLA_UNID = 'NP3eaa'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP3eaa');
    } else {
        return (feature['SIGLA_UNID']  == 'NP3eaa');
    }
}


function exp_Litologia_10rule65_eval_expression(context) {
    // SIGLA_UNID = 'NP3eal'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP3eal');
    } else {
        return (feature['SIGLA_UNID']  == 'NP3eal');
    }
}


function exp_Litologia_10rule66_eval_expression(context) {
    // SIGLA_UNID = 'NP3epa'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NP3epa');
    } else {
        return (feature['SIGLA_UNID']  == 'NP3epa');
    }
}


function exp_Litologia_10rule67_eval_expression(context) {
    // SIGLA_UNID = 'NQc'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'NQc');
    } else {
        return (feature['SIGLA_UNID']  == 'NQc');
    }
}


function exp_Litologia_10rule68_eval_expression(context) {
    // SIGLA_UNID = 'P1ar'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'P1ar');
    } else {
        return (feature['SIGLA_UNID']  == 'P1ar');
    }
}


function exp_Litologia_10rule69_eval_expression(context) {
    // SIGLA_UNID = 'PP2rr'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'PP2rr');
    } else {
        return (feature['SIGLA_UNID']  == 'PP2rr');
    }
}


function exp_Litologia_10rule70_eval_expression(context) {
    // SIGLA_UNID = 'Psb'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'Psb');
    } else {
        return (feature['SIGLA_UNID']  == 'Psb');
    }
}


function exp_Litologia_10rule71_eval_expression(context) {
    // SIGLA_UNID = 'Q12e'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'Q12e');
    } else {
        return (feature['SIGLA_UNID']  == 'Q12e');
    }
}


function exp_Litologia_10rule72_eval_expression(context) {
    // SIGLA_UNID = 'Q1e'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'Q1e');
    } else {
        return (feature['SIGLA_UNID']  == 'Q1e');
    }
}


function exp_Litologia_10rule73_eval_expression(context) {
    // SIGLA_UNID = 'Q1l'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'Q1l');
    } else {
        return (feature['SIGLA_UNID']  == 'Q1l');
    }
}


function exp_Litologia_10rule74_eval_expression(context) {
    // SIGLA_UNID = 'Q1tm'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'Q1tm');
    } else {
        return (feature['SIGLA_UNID']  == 'Q1tm');
    }
}


function exp_Litologia_10rule75_eval_expression(context) {
    // SIGLA_UNID = 'Q2a'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'Q2a');
    } else {
        return (feature['SIGLA_UNID']  == 'Q2a');
    }
}


function exp_Litologia_10rule76_eval_expression(context) {
    // SIGLA_UNID = 'Q2e1'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'Q2e1');
    } else {
        return (feature['SIGLA_UNID']  == 'Q2e1');
    }
}


function exp_Litologia_10rule77_eval_expression(context) {
    // SIGLA_UNID = 'Q2e2'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'Q2e2');
    } else {
        return (feature['SIGLA_UNID']  == 'Q2e2');
    }
}


function exp_Litologia_10rule78_eval_expression(context) {
    // SIGLA_UNID = 'Q2fl'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'Q2fl');
    } else {
        return (feature['SIGLA_UNID']  == 'Q2fl');
    }
}


function exp_Litologia_10rule79_eval_expression(context) {
    // SIGLA_UNID = 'Q2pm'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'Q2pm');
    } else {
        return (feature['SIGLA_UNID']  == 'Q2pm');
    }
}


function exp_Litologia_10rule80_eval_expression(context) {
    // SIGLA_UNID = 'Q2tm'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'Q2tm');
    } else {
        return (feature['SIGLA_UNID']  == 'Q2tm');
    }
}


function exp_Litologia_10rule81_eval_expression(context) {
    // SIGLA_UNID = 'SDt'

    var feature = context.feature;
    
    if (feature.properties) {
        return (feature.properties['SIGLA_UNID']  == 'SDt');
    } else {
        return (feature['SIGLA_UNID']  == 'SDt');
    }
}