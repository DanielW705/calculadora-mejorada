using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Calculadora_Mejorada.Models
{
    public class Calculadora
    {
        public double nm1 { get; set; }
        public double nm2 { get; set; }
        public string sel { get; set; }
        public Calculadora()
        {

        }

        public (bool mathError, string resultado) calcular()
        {
            if (sel == "Sum")
            {
                return (false, (nm1 + nm2).ToString());
            }
            else if (sel == "Res")
            {
                return (false, (nm1 - nm2).ToString());
            }
            else if (sel == "Mult")
            {
                return (false, (nm1 * nm2).ToString());
            }
            else
            {
                if (nm2 != 0)
                {
                    return (false, (nm1 / nm2).ToString());
                }
                else
                {
                    return (true, "Math error");
                }
            }
        }
    }
}
