function obtenerRecordatorio(dia, mensaje = '') {
            const actividades = {
                'lunes': 'Atender cliente específico',
                'martes': 'Visitar agencia fuera de la ciudad',
                'miércoles': 'Llevar a mi hija al ballet',
                'jueves': 'Priorizar entregas de desarrollo',
                'viernes': 'Atender problemas de manera remota',
                'sábado': 'Hacer lo que mi esposa quiera',
                'domingo': 'Día libre'
            };

            const actividad = actividades[dia.toLowerCase()];
            
            if (actividad) {
                return {
                    dia: dia,
                    actividad: actividad,
                    mensaje: mensaje
                };
            } else {
                return null;
            }
        }

        function verificarRecordatorio() {
            const dia = document.getElementById('dia').value;
            const mensaje = document.getElementById('mensaje').value;
            const resultado = document.getElementById('resultado');

            if (!dia) {
                alert('Por favor selecciona un día');
                return;
            }

            const recordatorio = obtenerRecordatorio(dia, mensaje);
            
            if (recordatorio) {
                resultado.innerHTML = `
                    <div class="actividad">
                        ${recordatorio.dia}: ${recordatorio.actividad}
                    </div>
                    ${recordatorio.mensaje ? 
                        `<div class="mensaje-personalizado">
                            <strong>Tu recordatorio:</strong> ${recordatorio.mensaje}
                        </div>` : ''
                    }
                `;
                resultado.style.display = 'block';
            }
        }

        window.onload = function() {
            const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
            const hoy = dias[new Date().getDay()];
            document.getElementById('dia').value = hoy;
            verificarRecordatorio();
        };